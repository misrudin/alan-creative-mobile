import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import HTML from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailNews} from '../../Public/Redux/actions/news';
import {getDetailMedia} from '../../Public/Redux/actions/media';

const {width, height} = Dimensions.get('window');

const News = ({route}) => {
  const {detailNews} = useSelector(state => state.news);
  const {detailMedia} = useSelector(state => state.media);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    await dispatch(getDetailNews(route.params.data.id));
    await dispatch(getDetailMedia(route.params.data.featured_media))
      .then(() => {
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color="#0066ff"
          style={{width: width, position: 'absolute', top: height / 2 - 5}}
        />
      ) : error ? (
        <View
          style={{
            width: width,
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={{width: width, textAlign: 'center', color: '#acacac'}}>
            Opss, No Internet, Please Try Again!
          </Text>
          <TouchableOpacity onPress={() => getData()}>
            <Text style={[styles.button, {marginTop: 10}]}>Refresh</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={{flex: 1, paddingHorizontal: 10, marginBottom: 5}}>
          <View style={styles.header}>
            <Image
              source={{uri: detailMedia.link}}
              style={{width: width, height: height / 3}}
            />
            <Text style={styles.title}>{detailNews.title.rendered}</Text>
          </View>
          <HTML
            html={detailNews.content.rendered}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: width,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
  },
});
