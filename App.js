import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Ionicons } from '@expo/vector-icons';
import ClaimButton  from './components/claim-button';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';

function AboutScreen() {
  const [toggled, setToggled] = useState(false);
  const toggle = () => {setToggled(!toggled);};

  let animateIcon = () => {
    
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
      <TouchableOpacity onPress={animateIcon}>
        <Ionicons name='finger-print' size={110} color='#EFEFEF'/>
      </TouchableOpacity>
    </View>
  );
}

function MinerScreen() {
  const MAX_POINTS = 15;
  const [level, setLevel] = useState(0);
  const [balance, setBalance] = useState(0);
  const [claimEnabled, setClaimEnabled] = useState(false);
  const fill = (level / MAX_POINTS) * 100;

  let increment = 1;

  let claim = () => {
    if(claimEnabled){
      let newBalance = balance + increment;
      setBalance(newBalance);
      setLevel(0);
      setClaimEnabled(false);
    }
  };

  let interval = 500;
  let timer = setTimeout(() => {
    //control if clock filled
    if(level != MAX_POINTS){
      //set clock level
      let newLevel = level + 1;
      setLevel(newLevel);
    }else{
      setClaimEnabled(true);
    }
    // console.log("tick");
  }, interval);
  return (
    <View style={[styles.center, { backgroundColor: 'white', height: '100%' }]}>
      <View style={{marginBottom:'0px'}}>
        <AnimatedCircularProgress
          size={200}
          width={3}
          backgroundWidth={30}
          fill={fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          rotation={180}
          arcSweepAngle={360}
        >
          {fill => <Text style={styles.points}>{Math.round((MAX_POINTS * fill) / 100)}</Text>}
        </AnimatedCircularProgress>
      </View>
      <View style={styles.hr}></View>
      <View style={[{ flexDirection: 'row' }]}>
        <View><Text style={{borderWidth: 1, borderColor: 'white', fontSize: 20}}>$</Text></View>
        <View><Text style={[styles.balance, {fontSize: 20}]}>{balance}</Text></View>
        <View><Text style={{borderWidth: 1, borderColor: 'white', fontSize: 20}}>PSC</Text></View>
      </View>
      <View style={styles.hr}></View>
      <View style={{flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
        <ClaimButton isEnabled={claimEnabled} onPressHandler={claim} />
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
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  // rowCenter: [center, { flexDirection: 'row' }],
  hr:{ 
    borderBottomColor: '#C1C1C1', 
    borderBottomWidth: 1, 
    width: '60%', 
    marginVertical:20
  },
  balance: {
    backgroundColor: '#FAFAFA', 
    marginHorizontal: 5, 
    borderWidth:1, 
    borderColor: '#3d5875', 
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

