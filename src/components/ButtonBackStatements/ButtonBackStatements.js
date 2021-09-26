import React, { Component } from "react";

import { Image, TouchableOpacity, Animated, Dimensions } from "react-native";

import { connect } from "react-redux";
import { setStatements, setLoadList } from "../../redux/redux.js";

import { styles } from "./Styles";

import arrowDown from "../../assets/arrowDownGray.png";

const { height } = Dimensions.get("window");

class ButtonBackStatements extends Component {
  buttonPress = () => {
    const {
      bottomBackStatements,
      bottomStatements,
      bottomMenu,
      bottomFooter,
      opacityListStatements
    } = this.props;

    Animated.timing(bottomBackStatements, {
      toValue: -0.05 * height,
      duration: 500
    }).start();

    Animated.timing(bottomStatements, {
      toValue: height / 2,
      duration: 500
    }).start();

    Animated.timing(bottomMenu, {
      toValue: 0.065 * height,
      duration: 500
    }).start();

    Animated.timing(opacityListStatements, {
      toValue: 0,
      duration: 650
    }).start();

    Animated.timing(bottomFooter, {
      toValue: 0,
      duration: 500
    }).start();

    this.props.setStatements(false);

    setTimeout(() => {
      this.props.setLoadList(false);
    }, 500);
  };

  render() {
    const { bottomBackStatements } = this.props;
    return (
      <Animated.View
        style={{ ...styles.animatedView, bottom: bottomBackStatements }}
      >
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            this.buttonPress();
          }}
        >
          <Image style={styles.imageArrow} source={arrowDown} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  bottomStatements: state.bottomStatements,
  bottomFooter: state.bottomFooter,
  bottomMenu: state.bottomMenu,
  bottomBackStatements: state.bottomBackStatements,
  opacityListStatements: state.opacityListStatements
});

const mapDispatchToProps = dispatch => ({
  setStatements: boolean => {
    dispatch(setStatements(boolean));
  },

  setLoadList: boolean => {
    dispatch(setLoadList(boolean));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBackStatements);
