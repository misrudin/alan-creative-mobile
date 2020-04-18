import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Menu = ({onPress}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress('Who')}>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/who-we-are.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            Who We Are
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress('Meet')}>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/meet-the-team.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            Meet The Team
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress('Portfolio')}>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/portfolio.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            Portfolio
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress('News')}>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/news.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            News
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress('Career')}>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/career.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            Career
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress('Article')}>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/articels.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            Article
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() => onPress('Services')}>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/services.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            Services
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuItem}
        onPress={() =>
          Linking.openURL(`http://instagram.com/_u/alancreativeid/`)
        }>
        <View style={styles.containImg}>
          <Image
            source={require('../Assets/Img/instagram.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={{position: 'relative', fontSize: 11, fontWeight: 'bold'}}>
            Instagram
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '80%',
    opacity: 1,
  },
  menuItem: {
    width: '25%',
    height: 100,
    padding: 4,
    position: 'relative',
    marginBottom: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
