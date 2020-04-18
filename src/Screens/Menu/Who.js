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

const Who = () => {
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
          <Text style={styles.h1}>We give you the best Experience!</Text>
          <Text style={{textAlign: 'center', marginBottom: 20}}>
            If you want to have the most success when you are creating a
            homepage for your site, it is a good idea. Alan is your best
            choises. Just be our partner, and get the most creative and
            innovative result for your company. Alan Creative is a crative
            agency under PT. Alan Mediatech Indonesia. Alan Creative creates a
            web and mobile applications such as iOS & android apps. We helped
            our clients to build customized their technology solutions, from
            nothing to everything, from offline to online, e-commerce till
            e-learning, from corporate website to the sophisticated asset
            integrity management systems, from apps installed in your mobile to
            SaaS in the cloud.
          </Text>
          <Image
            source={{
              uri:
                'https://alan.co.id/wp-content/uploads/2019/11/background-Alan-Creative-1.png',
            }}
            style={{width: width, height: 300, marginBottom: 20}}
          />

          <Text style={styles.h1}>How we build awesome products</Text>
          <Text style={{textAlign: 'center', marginBottom: 20}}>
            We are an Creative agency, based in Jakarta, Depok, Lombok, and
            Sumbawa. Vision Every company is performing best online. Mission
            Helping businesses to find the perfect and most succesful strategy,
            to be online.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Who;

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
