import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/about-screen'; 
import MinerScreen from './screens/miner-screen'; 
import SettingsScreen from './screens/settings-screen'; 


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Miner'>
        <Tab.Screen name='About' component={AboutScreen} />
        <Tab.Screen name='Miner' component={MinerScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  // rowCenter: [center, { flexDirection: 'row' }],
  hr:{ 
    borderBottomColor: '#C1C1C1', 
    // borderBottomWidth: 1, 
    width: '60%', 
    marginVertical:20
  },
  balance: {
    backgroundColor: '#FFFFFF', 
    marginHorizontal: 5, 
    // borderWidth:1, 
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor: '#EFEFEF', 
    paddingHorizontal: 5, 
    width: '150px', 
    borderRadius: 5, 
    textAlign:'right'
  },
  points: {
    textAlign: 'center',
    color: '#7591af',
    fontSize: 30,
    fontWeight: '100',
  }
});

