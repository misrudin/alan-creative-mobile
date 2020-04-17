import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewPost} from '../Public/Redux/actions/posts';
import {getNewNews} from '../Public/Redux/actions/news';
const {width, height} = Dimensions.get('window');
import Menu from '../Components/Menu';
import Post from '../Components/Post';
import News from '../Components/News';
import Carousel from '../Components/Carousel';
import {dumyData} from '../Assets/data/Carousel';

const Home = props => {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const {newPosts} = useSelector(state => state.posts);
  const {newNews} = useSelector(state => state.news);

  const dispatch = useDispatch();

  const getData = async () => {
    setLoading(true);
    await dispatch(getNewPost())
      .then(() => {
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };
  const getDataNews = async () => {
    setLoading2(true);
    await dispatch(getNewNews())
      .then(() => {
        setLoading2(false);
        setError2(false);
      })
      .catch(() => {
        setLoading2(false);
        setError2(true);
      });
  };

  useEffect(() => {
    // const unsubscribe = props.navigation.addListener('focus', () => {
    //   getData();
    //   getDataNews();
    // });

    // return unsubscribe;
    getData();
    getDataNews();
    setInterval(function() {
      getData();
      getDataNews();
    }, 100000);
  }, []);

  const onPressMenu = location => {
    props.navigation.navigate(location);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Carousel data={dumyData} />
        </View>
        <View style={styles.menu}>
          <Menu onPress={location => onPressMenu(location)} />
        </View>

        <View style={styles.main}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 4}}>
            Baca Artikel Terbaru Kami
          </Text>
          <View style={styles.articels}>
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
                <TouchableOpacity onPress={() => getData()}>
                  <Text style={[styles.button, {marginTop: 10}]}>Refresh</Text>
                </TouchableOpacity>
              </View>
            ) : (
              newPosts.map((data, i) => {
                return (
                  <Post
                    key={i}
                    data={data}
                    onPress={id =>
                      props.navigation.navigate('ViewArticle', {id: id})
                    }
                  />
                );
              })
            )}
          </View>
        </View>
        {!loading && !error ? (
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Article')}>
              <Text style={styles.button}>Lihat Artikel Lainnya</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.main}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 4}}>
            Baca Berita Terbaru
          </Text>
          <View style={styles.articels}>
            {loading2 ? (
              <ActivityIndicator
                size="small"
                color="#0066ff"
                style={{width: width, marginTop: 10}}
              />
            ) : error2 ? (
              <View style={{width: width, alignItems: 'center', marginTop: 10}}>
                <Text
                  style={{width: width, textAlign: 'center', color: '#acacac'}}>
                  Opss, No Internet, Please Try Again!
                </Text>
                <TouchableOpacity onPress={() => getDataNews()}>
                  <Text style={[styles.button, {marginTop: 10}]}>Refresh</Text>
                </TouchableOpacity>
              </View>
            ) : (
              newNews.map((data, i) => {
                return (
                  <News
                    key={i}
                    data={data}
                    onPress={id =>
                      props.navigation.navigate('ViewNews', {id: id})
                    }
                  />
                );
              })
            )}
          </View>
        </View>
        {!loading2 && !error2 ? (
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('News')}>
              <Text style={styles.button}>Lihat Berita Lainnya</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  header: {
    backgroundColor: '#f7f9fc',
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  main: {
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  articels: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  footer: {
    width: width,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066ff',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
});
