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
import PortfolioComp from '../../Components/Portfolio';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPortfolio,
  getDetailPortfolio,
} from '../../Public/Redux/actions/portfolio';
import {getDetailMedia} from '../../Public/Redux/actions/media';

import HTML from 'react-native-render-html';

const {width, height} = Dimensions.get('window');

const Portfolio = props => {
  const dispatch = useDispatch();
  const {allPortfolio, detailPort} = useSelector(state => state.portfolio);
  const {detailMedia} = useSelector(state => state.media);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(false);

  const getData = async () => {
    setLoading(true);
    await dispatch(getPortfolio())
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
    await dispatch(getDetailPortfolio(data.id));
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

  const muncul = data => {
    getDetail(data);
    setShow(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Image
              source={{
                uri:
                  'https://alan.co.id/wp-content/uploads/2019/11/banner_celebrites_8.png',
              }}
              style={{width: '50%', height: 150}}
              resizeMode={'contain'}
            />
            <Text style={styles.h1}>
              Boost your business with Alan Creative
            </Text>
          </View>
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
              allPortfolio.map((data, i) => {
                console.log(data);
                return (
                  <PortfolioComp
                    key={i}
                    data={data}
                    index={i}
                    onPress={data => muncul(data)}
                  />
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
            </View>
          ) : (
            <ScrollView
              style={{flex: 1, paddingHorizontal: 10, marginBottom: 5}}>
              <View style={styles.headerModal}>
                <Image
                  source={{uri: detailMedia.link}}
                  style={{width: width, height: height / 3}}
                />
                <Text style={styles.title}>{detailPort.title.rendered}</Text>
              </View>
              <HTML
                html={detailPort.content.rendered}
                imagesMaxWidth={Dimensions.get('window').width}
              />
            </ScrollView>
          )}
        </View>
      </Modal>
    </>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9fc',
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    width: width,
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    position: 'absolute',
    bottom: 20,
  },
  main: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  headerModal: {
    width: width,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
