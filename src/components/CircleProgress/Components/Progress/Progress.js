import React from "react";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

import { View } from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import { styles } from "./Styles";

const Progress = () => (
  <View style={styles.viewProgress}>
    <AnimatedCircularProgress
      style={styles.container}
      size={0.326 * height}
      width={10}
      duration={800}
      backgroundWidth={0}
      fill={75}
      rotation={0}
      tintColor="#00aab3"
      backgroundColor="transparent"
      padding={0.001 * height}
    ></AnimatedCircularProgress>
  </View>
);

export default Progress;
