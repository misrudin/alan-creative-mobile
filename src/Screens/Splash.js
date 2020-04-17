import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {loading} from '../Public/Redux/actions/auth';
// import {getMedia, getMediaCarousel} from '../Public/Redux/actions/media';

const Splash = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getMediaCarousel());
    // dispatch(getMedia());
    setTimeout(() => {
      dispatch(loading());
    }, 1000);
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../Assets/Img/logo-alan-creative.png')}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  img: {
    width: '90%',
    height: 90,
  },
});

export default Splash;
