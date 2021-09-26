import React, { Component } from "react";

import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";

import { connect } from "react-redux";

import icon from "../../../../assets/settings.png";
import iconSelected from "../../../../assets/settingsSelected.png";
import { setHomeSelected } from "../../../../redux/redux.js";

import { styles } from "./Styles";

const { width } = Dimensions.get("window");

class ButtonSettings extends Component {
  buttonSettingsClick = () => {
    const { leftSettings, rightHome, leftBlueBar } = this.props;

    Animated.timing(leftSettings, {
      toValue: 0,
      duration: 400
    }).start();

    Animated.timing(rightHome, {
      toValue: width,
      duration: 400
    }).start();

    Animated.timing(leftBlueBar, {
      toValue: 0.77 * width,
      duration: 400
    }).start();

    this.props.setHomeSelected(false);
  };

  render() {
    const { homeSelected } = this.props;
    var iconRender;

    if (homeSelected) {
      iconRender = icon;
    } else {
      iconRender = iconSelected;
    }
    return (
      <TouchableOpacity
        style={styles.buttonFooter}
        onPress={() => {
          this.buttonSettingsClick();
        }}
      >
        <View />
        <Image source={iconRender} style={styles.imageSettings} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSettings);
