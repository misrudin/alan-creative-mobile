import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Acount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://britz.mcmaster.ca/images/nouserimage.gif/image',
            }}
            resizeMode={'contain'}
          />
        </View>
        <Text style={styles.nama}>Alan Creative</Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity>
          <Text style={styles.button}>Change Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              styles.button,
              {marginTop: 20, backgroundColor: 'salmon', color: '#fff'},
            ]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Acount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  header: {
    width: width,
    height: height / 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    shadowColor: '#eee',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  nama: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#666',
    textShadowColor: '#eee',
    textShadowOffset: {width: 0.8, height: 0.8},
    textShadowRadius: 3,
    elevation: 2,
  },
  mainContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 4,
    shadowOffset: {width: 0.2, height: 0.2},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 2,
  },
});
