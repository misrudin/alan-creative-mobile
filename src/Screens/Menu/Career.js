import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Career = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Career</Text>
      </View>
      <View style={styles.main}>
        <Text>Alan</Text>
      </View>
    </View>
  );
};

export default Career;

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
    color: '#fff',
  },
  main: {
    paddingHorizontal: 10,
  },
});
