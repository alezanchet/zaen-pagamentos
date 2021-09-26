import React, { Component } from "react";

import { Dimensions, Animated, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { connect } from "react-redux";
import { setMenu, setShowButtonZ } from "../../../../redux/redux.js";

import z from "../../../../assets/z.png";

const { height, width } = Dimensions.get("window");

import { styles } from "./Styles.js";

class ButtonZ extends Component {
  buttonZClick = async () => {
    const {
      opacityMenu,
      bottomMenu,
      opacityZ,
      bottomX,
      opacityX,
      buttonImage,
      buttonText,
      button1Left,
      button1Bottom,
      button2Left,
      button2Bottom,
      opacityQRcode
    } = this.props;

    await this.props.setMenu(true);

    Animated.timing(opacityMenu, {
      toValue: 1,
      duration: 400
    }).start();

    Animated.timing(bottomMenu, {
      toValue: 0.1625 * height,
      duration: 200
    }).start();

    Animated.timing(bottomX, {
      toValue: 0.1625 * height,
      duration: 200
    }).start();

    Animated.timing(opacityZ, {
      toValue: 0,
      duration: 400
    }).start();

    Animated.timing(opacityX, {
      toValue: 1,
      duration: 400
    }).start();

    Animated.timing(button1Left, {
      toValue: 0.08 * width,
      duration: 400
    }).start();

    Animated.timing(button1Bottom, {
      toValue: 0.14 * height,
      duration: 400
    }).start();

    Animated.timing(button2Left, {
      toValue: 0.25 * width,
      duration: 400
    }).start();

    Animated.timing(button2Bottom, {
      toValue: 0.27 * height,
      duration: 400
    }).start();

    setTimeout(() => {
      Animated.timing(buttonImage, {
        toValue: 0.04 * height,
        duration: 200
      }).start();

      Animated.timing(buttonText, {
        toValue: 0.016 * height,
        duration: 200
      }).start();
    }, 200);

    setTimeout(() => {
      this.props.setShowButtonZ(false);
    }, 200);

    Animated.timing(opacityQRcode, {
      toValue: 1,
      duration: 600
    }).start();
  };

  render() {
    const { bottomMenu, opacityZ, showButtonZ } = this.props;

    return (
      <>
        {showButtonZ ? (
          <Animated.View
            style={{
              ...styles.animatedZaen,
              bottom: bottomMenu,
              opacity: opacityZ
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.buttonZClick();
              }}
            >
              <LinearGradient
                style={styles.gradientZaen}
                colors={["#00aab3", "#00494d"]}
              >
                <Image source={z} style={styles.imageZ} resizeMode="contain" />
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = state => ({
  bottomMenu: state.bottomMenu,
  bottomX: state.bottomX,
  menu: state.menu,
  opacityMenu: state.opacityMenu,
  opacityZ: state.opacityZ,
  opacityX: state.opacityX,
  buttonImage: state.buttonImage,
  buttonText: state.buttonText,
  button1Bottom: state.button1Bottom,
  button1Left: state.button1Left,
  button2Bottom: state.button2Bottom,
  button2Left: state.button2Left,
  showButtonZ: state.showButtonZ,
  opacityQRcode: state.opacityQRcode
});

const mapDispatchToProps = dispatch => ({
  setMenu: boolean => {
    dispatch(setMenu(boolean));
  },
  setShowButtonZ: boolean => {
    dispatch(setShowButtonZ(boolean));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonZ);
