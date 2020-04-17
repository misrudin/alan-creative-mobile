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
import PortfolioComp from '../../Components/Portfolio';
import {useDispatch, useSelector} from 'react-redux';
import {getPortfolio} from '../../Public/Redux/actions/portfolio';

const {width, height} = Dimensions.get('window');

const Portfolio = props => {
  const dispatch = useDispatch();
  const {allPortfolio} = useSelector(state => state.portfolio);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.h1}>Our Portfolio</Text>
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
                <PortfolioComp key={i} data={data} onPress={url => null} />
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
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
  },
  main: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
});
