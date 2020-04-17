import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

const News = ({data, onPress}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress(data.id)}>
        <View style={styles.containImg}>
          <Image
            source={{
              uri: 'https://alan.co.id/alan-creative/ramadhan-web/',
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

export default News;

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
