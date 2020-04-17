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
} from 'react-native';
import Post from '../../Components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPosts} from '../../Public/Redux/actions/posts';

const {width, height} = Dimensions.get('window');

const Article = props => {
  const dispatch = useDispatch();
  const {allPost} = useSelector(state => state.posts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    getData();
    setInterval(function() {
      getData();
    }, 100000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <Text style={styles.title}>Article</Text>
      </View>
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
              <TouchableOpacity onPress={() => getData()}>
                <Text style={[styles.button, {marginTop: 10}]}>Refresh</Text>
              </TouchableOpacity>
            </View>
          ) : (
            allPost.map((data, i) => {
              return (
                <Post
                  key={i}
                  data={data}
                  onPress={id => props.navigation.navigate('ViewArticle')}
                />
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
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
});
