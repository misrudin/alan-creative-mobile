import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Career = () => {
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
          <Image
            source={{
              uri:
                'https://alan.co.id/wp-content/uploads/2019/11/background-Alan-Creative-1.png',
            }}
            style={{width: width / 2, height: 200, marginBottom: 20}}
          />

          <Text style={styles.h1}>Are you the Next?</Text>
          <Text style={{textAlign: 'center', marginBottom: 20}}>
            We are an ambitious group and we work really hard to pursue our
            goals. We also realize that to do this, we will need help from you –
            the equally ambitious, hungry, talented, passionate, and hardworking
            individuals to join the team. Our current team boasts people having
            studied at all campus arround the world, like Uhamka, Paramadina,
            UI, ITB, Unpad, IPB, and other top universities. Many of them have
            also worked in a diverse set of industries, including consulting,
            startup, non-profit, education, research, creative, and other
            sectors. We also like to have fun, and we bet you will also get lots
            of it when you join.
          </Text>

          <Text style={styles.h1}>Work at Alan Creative</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://alan.co.id/careers/')}>
            <Text
              style={{
                backgroundColor: '#0066ff',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 4,
                color: '#fff',
              }}>
              All Requirements
            </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', marginBottom: 20}}>
            File size attachment maksimal 5 MB. Kirim ke karir@alan.co.id dengan
            judul subjek Sesuai Bidang – (nama lengkap). Bagi yang sesuai dengan
            requirement akan dipanggil untuk proses pre-screening.
          </Text>
          <Text style={{textAlign: 'center', marginBottom: 20}}>
            *Kami tidak akan menindaklanjuti email yang tidak memiliki konten.
            Silahkan buat konten email yang baik.
          </Text>
        </View>
      </ScrollView>
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
