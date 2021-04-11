  
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedIconButton from './animated-icon-button';

const ClaimButton = ({ isEnabled, onPressHandler }) => {
  return (
      <TouchableOpacity onPress={onPressHandler} disabled={!isEnabled}>
        <View style={{alignItems:"center"}}>
          <View>
            {/* <AnimatedIconButton
              firstIcon="fingerprint"
              firstColour="#EFEFEF"
              firstSize={110}
              secondIcon="fingerprint"
              secondColour="#00e0ff"
              secondSize={110}
              enabled={isEnabled}
              callBack={onPressHandler}
            /> */}
            <Ionicons name="finger-print" color={isEnabled ? '#00e0ff' : '#EFEFEF'} size={60} />
          </View>
          <View>
            <Text style={[{textAlign:"center", marginTop: 15}, isEnabled ? {color: "#3d5875"} : {color: "#EFEFEF"}]}>Claim!</Text>
          </View>
        </View>
      </TouchableOpacity>
  );
};

export default ClaimButton;