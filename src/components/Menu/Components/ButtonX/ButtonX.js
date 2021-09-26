import React, { Component } from "react";

import { Animated, Dimensions, Image, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { setMenu, setShowButtonZ } from "../../../../redux/redux.js";

const { height, width } = Dimensions.get("window");

import closeBlue from "../../../../assets/closeBlue.png";

import { styles } from "./Styles.js";

class ButtonX extends Component {
  buttonXClick = async () => {
    const {
      opacityMenu,
      bottomMenu,
      opacityZ,
      bottomX,
      opacityX,
      buttonText,
      buttonImage,
      button1Bottom,
      button1Left,
      button2Bottom,
      button2Left,
      opacityQRcode
    } = this.props;

    setTimeout(() => {
      this.props.setMenu(false);
    }, 400);

    this.props.setShowButtonZ(true);

    Animated.timing(opacityMenu, {
      toValue: 0,
      duration: 400
    }).start();

    Animated.timing(bottomMenu, {
      toValue: 0.065 * height,
      duration: 200
    }).start();

    Animated.timing(bottomX, {
      toValue: 0.07 * height,
      duration: 200
    }).start();

    Animated.timing(opacityZ, {
      toValue: 1,
      duration: 400
    }).start();

    Animated.timing(opacityX, {
      toValue: 0,
      duration: 400
    }).start();

    Animated.timing(button1Left, {
      toValue: 0.392 * width,
      duration: 400
    }).start();

    Animated.timing(button1Bottom, {
      toValue: 0.0505 * height,
      duration: 400
    }).start();

    Animated.timing(button2Left, {
      toValue: 0.392 * width,
      duration: 400
    }).start();

    Animated.timing(button2Bottom, {
      toValue: 0.0505 * height,
      duration: 400
    }).start();

    Animated.timing(buttonImage, {
      toValue: 0,
      duration: 200
    }).start();

    Animated.timing(buttonText, {
      toValue: 1,
      duration: 200
    }).start();

    Animated.timing(opacityQRcode, {
      toValue: 0,
      duration: 200
    }).start();
  };

  render() {
    const { menu, bottomX, opacityX } = this.props;

    return (
      <>
        {menu ? (
          <Animated.View
            style={{
              ...styles.animatedX,
              bottom: bottomX,
              opacity: opacityX
            }}
          >
            <TouchableOpacity
              style={styles.buttonX}
              onPress={() => {
                this.buttonXClick();
              }}
            >
              <Image
                style={styles.imageX}
                source={closeBlue}
                resizeMode="contain"
              />
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
  showButtonZ: state.showButtonZ,
  buttonImage: state.buttonImage,
  buttonText: state.buttonText,
  button1Bottom: state.button1Bottom,
  button1Left: state.button1Left,
  button2Bottom: state.button2Bottom,
  button2Left: state.button2Left,
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonX);
