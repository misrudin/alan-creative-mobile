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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(false);
  const [key, setKey] = useState('');
  const [page, setPage] = useState('1');

  const getData = async () => {
    setLoading(true);
    await dispatch(getAllPosts(page, key))
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
  }, []);

  const muncul = data => {
    getDetail(data);
    setShow(true);
  };

  const nextPage = () => {
    let pages = parseInt(page) + 1;
    setPage(pages);
    // alert(page);
    getData();
  };
  const prevPage = () => {
    if (page >= 1) {
      let pages = parseInt(page) - 1;
      setPage(pages);
      // alert(page);
      getData();
    } else {
      setPage(1);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={key}
            onChangeText={e => setKey(e)}
            onSubmitEditing={() => getData()}
            keyboardType={'web-search'}
          />
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
                  Sorry, There is no data to appear, Try again!
                </Text>
              </View>
            ) : (
              allPost.map((data, i) => {
                return (
                  <Post
                    key={i}
                    data={data}
                    index={i}
                    onPress={data => muncul(data)}
                  />
                );
              })
            )}
          </View>
          {!loading && !error ? (
            <>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => prevPage()}>
                  <Text
                    style={{
                      backgroundColor: '#0066ff',
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      marginBottom: 10,
                      borderRadius: 4,
                      color: '#fff',
                      margin: 5,
                    }}>
                    Prev Page
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nextPage()}>
                  <Text
                    style={{
                      backgroundColor: '#0066ff',
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      marginBottom: 10,
                      borderRadius: 4,
                      color: '#fff',
                      margin: 5,
                    }}>
                    Next Page
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
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
