  
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ClaimButton = ({ isEnabled, onPressHandler }) => {
  return (
      <TouchableOpacity onPress={onPressHandler} disabled={!isEnabled}>
        <View style={{alignItems:"center"}}>
          <View>
            <Ionicons name='finger-print' size={70} color={isEnabled ? '#00e0ff' : '#EFEFEF'}/>
          </View>
          <View>
            <Text style={[{textAlign:"center", marginTop: 15}, isEnabled ? {color: "#3d5875"} : {color: "#EFEFEF"}]}>Claim!</Text>
          </View>
        </View>
      </TouchableOpacity>
  );
};

export default ClaimButton;