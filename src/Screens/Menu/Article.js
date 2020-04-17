import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Article = () => {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <Text style={styles.title}>Article</Text>
      </View>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder="Search..." />
      </View>
      <View style={styles.main}>
        <ScrollView>
          <Text>Alan</Text>
        </ScrollView>
      </View>
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
    color: '#fff',
  },
});
