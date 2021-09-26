import React from "react";

import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./Styles";

const Gradient = () => (
  <View style={styles.viewCircle}>
    <LinearGradient
      colors={["#1a1a1a", "#2b2b2b"]}
      style={styles.gradientCircle}
    >
      <Text style={styles.textName}> Guilherme </Text>
      <View>
        <Text style={styles.textBalance}> R$ 50,00 </Text>
        <Text style={styles.textPoints}> 7500 / 10k </Text>
      </View>
      <Text></Text>
    </LinearGradient>
  </View>
);

export default Gradient;
