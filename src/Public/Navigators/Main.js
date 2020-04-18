import React from 'react';
import {useSelector} from 'react-redux';
import Home from '../../Screens/Home';
import Saved from '../../Screens/Saved';
import Acount from '../../Screens/Acount';
import Splash from '../../Screens/Splash';
import {
  WhoWeAre,
  MetTheTeam,
  CareerCom,
  ArticleCom,
  ServicesCom,
  InstagramCom,
  PortfolioCom,
  NewsCom,
} from '../../Screens/Menu';
import Article from '../../Screens/WebView/Article';
import News from '../../Screens/WebView/News';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <>
      <Tab.Navigator
        backBehavior="none"
        tabBarOptions={{
          activeTintColor: '#0066ff',
          inactiveTintColor: '#000',
          inactiveBackgroundColor: '#fff',
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="store-alt" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({color, size}) => (
              <Icon name="clipboard-check" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Acount"
          component={Acount}
          options={{
            tabBarLabel: 'Akun Saya',
            tabBarIcon: ({color, size}) => (
              <Icon name="user-circle" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const AuthNav = () => {
  const {loading} = useSelector(state => state.auth);

  if (loading) {
    return <Splash />;
  }

  return (
    <>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Home"
            component={Navigators}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Who"
            component={WhoWeAre}
            options={{headerShown: true, headerTitle: 'Who We Are'}}
          />
          <Stack.Screen
            name="Meet"
            component={MetTheTeam}
            options={{headerShown: true, headerTitle: 'Meet The Team'}}
          />
          <Stack.Screen
            name="Portfolio"
            component={PortfolioCom}
            options={{headerShown: true, headerTitle: 'Our Portfolio'}}
          />
          <Stack.Screen
            name="News"
            component={NewsCom}
            options={{headerShown: true, headerTitle: 'News'}}
          />
          <Stack.Screen
            name="Career"
            component={CareerCom}
            options={{headerShown: true, headerTitle: 'Career'}}
          />
          <Stack.Screen
            name="Article"
            component={ArticleCom}
            options={{headerShown: true, headerTitle: 'Article'}}
          />
          <Stack.Screen
            name="Services"
            component={ServicesCom}
            options={{headerShown: true, headerTitle: 'Services'}}
          />
          <Stack.Screen
            name="Instagram"
            component={InstagramCom}
            options={{headerShown: true, headerTitle: 'Instagram'}}
          />
          <Stack.Screen
            name="ViewArticle"
            component={Article}
            options={{headerShown: true, headerTitle: 'View Article'}}
          />
          <Stack.Screen
            name="ViewNews"
            component={News}
            options={{headerShown: true, headerTitle: 'View News'}}
          />
        </>
      </Stack.Navigator>
    </>
  );
};

export default AuthNav;
