import React, { Component } from "react";

import { Animated, SafeAreaView } from "react-native";

import { connect } from "react-redux";

import Header from "../../components/Header/Header.js";

import { styles } from "./Styles";

class Settings extends Component {
  render() {
    const { leftSettings } = this.props;
    return (
      <Animated.View style={{ ...styles.container, left: leftSettings }}>
        <SafeAreaView>
          <Header title="Configurações" />
        </SafeAreaView>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  leftSettings: state.leftSettings
});

export default connect(mapStateToProps)(Settings);
