import React from "react";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { Pressable, View, Button, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

const AnimatedIconButton = (props) => {
  // firstIcon = firstIcon || "heart-outline";
  // firstColour = firstColour || "gray";
  // firstSize = firstSize || 15;

  // secondIcon = secondIcon || "heart-outline";
  // secondColour = secondColour || "red";
  // secondSize = secondSize || 15;

  let callback = () => {
    if(props.enabled) props.callBack();
  }

  const liked = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });

  let press = () => { 
    if(props.enabled){
      // if(props.callback) props.callback();
      return (liked.value = withSpring(liked.value ? 0 : 1));
    }
  };
  
  if (props.enabled) press();

  return (
    <Pressable onPressIn={press} onPressOut={callback}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcons
          name={props.firstIcon}
          size={props.firstSize}
          color={props.firstColour}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons
         name={props.secondIcon} 
         size={props.secondSize} 
         color={props.secondColour} 
        />
      </Animated.View>
    </Pressable>
  );
};

export default AnimatedIconButton;