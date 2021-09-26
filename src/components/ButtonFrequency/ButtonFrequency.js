import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  Animated,
  View,
  Dimensions,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import arrowDown from "../../assets/arrowDown.png";

import { styles } from "./Styles";

const { height } = Dimensions.get("window");

export default class ButtonFrequency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      heightOverlay: new Animated.Value(0),
    };
  }

  buttonFrequencyClick = () => {
    const { heightOverlay, overlay } = this.state;

    Animated.timing(heightOverlay, {
      toValue: overlay ? 0 : 0.2 * height,
      duration: 200
    }).start();

    this.setState({overlay: !overlay})
  };

  render() {
    const { heightOverlay } = this.state;
    const { topOverlay } = this.props;

    const spin = heightOverlay.interpolate({
      inputRange: [0, 0.2 * height],
      outputRange: ["0deg", "180deg"]
    });

    return (
      <>
        <Animated.View style={{...styles.viewOverlayFrequency, height: heightOverlay}}>
          <View style={{shadowColor: "#000",shadowOffset: { width: 0, height: 11 },shadowOpacity: 0.5,shadowRadius: 5}}>
            <LinearGradient
              colors={["#1a1a1a", "#2b2b2b"]}
              style={styles.gradientOverlay}>
              <ScrollView style={styles.scrollView}>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Dezembro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Novembro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Outubro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Setembro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Agosto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Julho</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Junho</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Maio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Abril</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Março</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Fevereiro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.buttonFrequencyClick();}}>
                  <Text style={styles.textMensal}>Janeiro</Text>
                </TouchableOpacity>
              </ScrollView>
            </LinearGradient>
          </View>
        </Animated.View>
        <Animated.View style={{ ...styles.buttonFrequency, top: topOverlay }}>
          <TouchableOpacity
            style={styles.buttonFrequency}
            onPress={() => {
              this.buttonFrequencyClick();
            }}
          >
            <Text style={styles.textSemanal}>Semanal</Text>
            <Animated.Image
              source={arrowDown}
              resizeMode="contain"
              style={{ ...styles.imageArrow, transform: [{ rotate: spin }] }}
            />
          </TouchableOpacity>
        </Animated.View>
      </>
    );
  }
}
