import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {getDetailMediaPort} from '../Public/Redux/actions/media';
import {useDispatch, useSelector} from 'react-redux';

const PortfolioComp = ({data, onPress, index}) => {
  const {detailMediaP} = useSelector(state => state.media);
  const dispatch = useDispatch();
  const [media, setMedia] = useState([]);

  const getDetail = async id => {
    await dispatch(getDetailMediaPort(id));
  };

  useEffect(() => {
    getDetail(data.featured_media);
  }, []);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress(data)}>
        <View style={styles.containImg}>
          <Image
            source={{
              uri: detailMediaP[index],
            }}
            style={styles.img}
            resizeMode="contain"
          />
          <View style={styles.title}>
            <Text
              style={{position: 'relative', fontSize: 12, fontWeight: 'bold'}}>
              {data.title.rendered}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PortfolioComp;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '80%',
    opacity: 1,
    borderWidth: 1,
  },
  menuItem: {
    width: '100%',
    height: 250,
    padding: 4,
    position: 'relative',
    marginBottom: 10,
  },
  containImg: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#eee',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 2,
    paddingBottom: 8,
  },
  title: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
});
