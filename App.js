import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About!</Text>
    </View>
  );
}

function MinerScreen() {
  return (
    <View style={[styles.center, { backgroundColor: 'white', height: '100%' }]}>
      <View>
        <Text>Clock</Text>
      </View>
      <View style={styles.hr}></View>
      <View style={[{ flexDirection: 'row' }]}>
        <View><Text style={{borderWidth: 1, borderColor: 'white', fontSize: 20}}>$</Text></View>
        <View><Text style={[styles.balance, {fontSize: 20}]}>0,00023</Text></View>
        <View><Text style={{borderWidth: 1, borderColor: 'white', fontSize: 20}}>PSC</Text></View>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

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
  center: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  hr:{ borderBottomColor: '#C1C1C1', borderBottomWidth: 1, width: '60%', marginVertical:20},
  balance: {backgroundColor: '#E6E6E6', marginHorizontal: 5, borderWidth:1, borderColor: 'gray', paddingHorizontal: 5, width: '150px', borderRadius: 3, textAlign:'right'}
});
