import React, { Component } from "react";

import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";

import { connect } from "react-redux";

import icon from "../../../../assets/home.png";
import iconSelected from "../../../../assets/homeSelected.png";

import { setHomeSelected } from "../../../../redux/redux.js";

import { styles } from "./Styles";

const { width } = Dimensions.get("window");

class ButtonHome extends Component {
  buttonHomeClick = () => {
    const { leftSettings, rightHome, leftBlueBar } = this.props;

    Animated.timing(leftSettings, {
      toValue: width,
      duration: 400
    }).start();

    Animated.timing(rightHome, {
      toValue: 0,
      duration: 400
    }).start();

    Animated.timing(leftBlueBar, {
      toValue: 0.11 * width,
      duration: 400
    }).start();

    this.props.setHomeSelected(true);
  };

  render() {
    const { homeSelected } = this.props;
    var iconRender;

    if (homeSelected) {
      iconRender = iconSelected;
    } else {
      iconRender = icon;
    }

    return (
      <TouchableOpacity
        style={styles.buttonFooter}
        onPress={() => {
          this.buttonHomeClick();
        }}
      >
        <View />
        <Image source={iconRender} style={styles.imageHome} />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  leftSettings: state.leftSettings,
  rightHome: state.rightHome,
  leftBlueBar: state.leftBlueBar,
  homeSelected: state.homeSelected
});

const mapDispatchToProps = dispatch => ({
  setHomeSelected: boolean => {
    dispatch(setHomeSelected(boolean));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonHome);
