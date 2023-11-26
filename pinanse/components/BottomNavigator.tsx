import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from '../screens/Account';
import Assistant from '../screens/Assistant';
import Category from '../screens/Category';
import Home from '../screens/Home';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#0b182f',
        tabBarStyle: {
          position: 'relative',
          paddingBottom: 10,
          height: 90,
          backgroundColor: 'white',
        },
        tabBarItemStyle: {
          alignContent: 'space-around',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-grid" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="none"
        component={Account}
        options={{
          tabBarIconStyle: { display: "none" }
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Assistant"
        component={Assistant}
        options={{
          tabBarLabel: 'Assistant',
          tabBarIcon: ({ color }) => (
            <Octicons name="dependabot" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
