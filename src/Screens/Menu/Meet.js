import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Meet = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{
              uri:
                'https://alan.co.id/wp-content/uploads/2019/11/banner_celebrites_5.png',
            }}
            style={{width: '100%', height: 300}}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.h1}>Our Creative Team</Text>
          <Image
            source={require('../../Assets/Img/team/1.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/2.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/3.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/4.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/5.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/6.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/7.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/8.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
          <Image
            source={require('../../Assets/Img/team/9.png')}
            style={{width: width - 10, margin: 0}}
            resizeMode={'contain'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Meet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9fc',
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    width: width,
    height: height / 3 - 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
  },
  main: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
