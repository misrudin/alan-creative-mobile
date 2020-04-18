import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import Post from '../../Components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPosts, getDetailPost} from '../../Public/Redux/actions/posts';
import {getDetailMedia} from '../../Public/Redux/actions/media';
import HTML from 'react-native-render-html';

const {width, height} = Dimensions.get('window');

const Article = props => {
  const dispatch = useDispatch();
  const {allPost, detailPost} = useSelector(state => state.posts);
  const {detailMedia} = useSelector(state => state.media);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(false);

  const getData = async () => {
    setLoading(true);
    await dispatch(getAllPosts(1, ''))
      .then(() => {
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const getDetail = async data => {
    setLoading2(true);
    await dispatch(getDetailPost(data.id));
    await dispatch(getDetailMedia(data.featured_media))
      .then(() => {
        setError2(false);
        setLoading2(false);
      })
      .catch(() => {
        setLoading2(false);
        setError2(true);
      });
  };

  useEffect(() => {
    getData();
    setInterval(function() {
      getData();
    }, 100000);
  }, []);

  const muncul = data => {
    getDetail(data);
    setShow(true);
  };

  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.brand}>
          <Text style={styles.title}>Article</Text>
        </View> */}
        <View style={styles.header}>
          <TextInput style={styles.input} placeholder="Search..." />
        </View>
        <ScrollView>
          <View style={styles.main}>
            {loading ? (
              <ActivityIndicator
                size="small"
                color="#0066ff"
                style={{width: width, marginTop: 10}}
              />
            ) : error ? (
              <View style={{width: width, alignItems: 'center', marginTop: 10}}>
                <Text
                  style={{width: width, textAlign: 'center', color: '#acacac'}}>
                  Opss, No Internet, Please Try Again!
                </Text>
              </View>
            ) : (
              allPost.map((data, i) => {
                return (
                  <Post key={i} data={data} onPress={data => muncul(data)} />
                );
              })
            )}
          </View>
        </ScrollView>
      </View>
      {/* modal */}
      <Modal
        animationType="slide"
        visible={show}
        onRequestClose={() => setShow(false)}>
        <View style={styles.container}>
          {loading2 ? (
            <ActivityIndicator
              size="small"
              color="#0066ff"
              style={{width: width, position: 'absolute', top: height / 2 - 5}}
            />
          ) : error2 ? (
            <View
              style={{
                width: width,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{width: width, textAlign: 'center', color: '#acacac'}}>
                Opss, No Internet, Please Try Again!
              </Text>
              <TouchableOpacity onPress={() => getDetail()}>
                <Text style={[styles.button, {marginTop: 10}]}>Refresh</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView
              style={{flex: 1, paddingHorizontal: 10, marginBottom: 5}}>
              <View style={styles.headerModal}>
                <Image
                  source={{uri: detailMedia.link}}
                  style={{width: width, height: height / 3}}
                />
                <Text style={styles.title}>{detailPost.title.rendered}</Text>
              </View>
              <HTML
                html={detailPost.content.rendered}
                imagesMaxWidth={Dimensions.get('window').width}
              />
            </ScrollView>
          )}
        </View>
      </Modal>
    </>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9fc',
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    width: width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    shadowColor: '#eee',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    margin: 10,
    borderRadius: 4,
  },
  main: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  input: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#666',
  },
  brand: {
    backgroundColor: '#000fff',
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerModal: {
    width: width,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
