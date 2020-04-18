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

const Services = () => {
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
          <Text style={styles.h1}>Don't work alone, let us do it for you.</Text>
          <Text style={{fontWeight: 'bold'}}>Mobile Apps Development</Text>
          <View style={styles.items}>
            <View style={styles.chiditem}>
              <Text>Apps Prototyping</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Android Apps</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>iOS Apps</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>UI & UX Design</Text>
            </View>
          </View>
          <Text style={{fontWeight: 'bold'}}>Web Application</Text>
          <View style={styles.items}>
            <View style={styles.chiditem}>
              <Text>Web Design</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Web Apps</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>E-Learning</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>E-Government</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>UI & UX Design</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Product Research</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Quality Assurance</Text>
            </View>
          </View>
          <Text style={{fontWeight: 'bold'}}>Graphic Design</Text>
          <View style={styles.items}>
            <View style={styles.chiditem}>
              <Text>Logo</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Name Card & Stationery</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Brochure/Flyer</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Banner</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Calendar</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Interior & Exterior</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Packaging</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Booth</Text>
            </View>
          </View>

          <Text style={{fontWeight: 'bold'}}>Video & Animation</Text>
          <View style={styles.items}>
            <View style={styles.chiditem}>
              <Text>2D Animation</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>3D Animation</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Motion Graphic</Text>
            </View>
            <View style={styles.chiditem}>
              <Text>Documentary Movie</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Services;

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
    marginBottom: 20,
    width: '100%',
    textAlign: 'center',
  },
  main: {
    paddingHorizontal: 10,
  },
  items: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chiditem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    // shadowColor: '#000',
    // shadowOffset: {width: 0.2, height: 0.2},
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
    // elevation: 2,
    borderRadius: 2,
    margin: 2,
    borderWidth: 1,
  },
});
