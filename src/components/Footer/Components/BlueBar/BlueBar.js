import React from "react";

import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView
} from "react-native";

import { connect } from "react-redux";

import { styles } from "./Styles.js";

class BlueBar extends React.Component {
  render() {
    const { leftBlueBar } = this.props;
    return (
      <Animated.View
        style={{ ...styles.bar, left: leftBlueBar }}
      ></Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  leftBlueBar: state.leftBlueBar
});

export default connect(mapStateToProps)(BlueBar);
