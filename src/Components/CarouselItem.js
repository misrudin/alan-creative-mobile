import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  // console.warn(item);
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width,
    height: height / 3,
    backgroundColor: '#fff',
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    width: width,
    paddingHorizontal: 5,
    // backgroundColor: 'red',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.8, height: 0.8},
    textShadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
  },
  image: {
    width: width,
    height: height / 3,
  },
  description: {
    fontSize: 13,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.8, height: 0.8},
    textShadowRadius: 3,
    elevation: 5,
  },
});
