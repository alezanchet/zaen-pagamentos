import React, { Component } from "react";

import {
  View,
  StatusBar,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Animated
} from "react-native";

import { connect } from "react-redux";

import Stores from "../Stores/Stores.js";
import Settings from "../Settings/Settings.js";

import CircleProgress from "../../components/CircleProgress/CircleProgress.js";
import HeaderHome from "../../components/HeaderHome/HeaderHome.js";
import Graph from "../../components/Graph/Graph.js";
import InputStatements from "../../components/InputStatements/InputStatements.js";
import ListStatements from "../../components/ListStatements/ListStatements.js";
import Menu from "../../components/Menu/Menu.js";
import Footer from "../../components/Footer/Footer.js";
import ButtonFrequency from "../../components/ButtonFrequency/ButtonFrequency.js";
import ButtonBackStatements from "../../components/ButtonBackStatements/ButtonBackStatements.js";

import { styles } from "./Styles";

class Home extends Component {
  render() {
    const { bottomStatements, rightHome } = this.props;
    return (
      <>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" />

          <Animated.View style={{ ...styles.container, right: rightHome }}>
            <HeaderHome />
            <CircleProgress />
          </Animated.View>

          <Animated.View
            style={{
              ...styles.viewStatements,
              top: bottomStatements,
              right: rightHome
            }}
          >
            <SafeAreaView>
              <TouchableOpacity
                onPress={Keyboard.dismiss}
                style={styles.touchableDismiss}
                activeOpacity={1}
              >
                <Graph />
                <ButtonFrequency />
                <InputStatements />
              </TouchableOpacity>
              <ListStatements />
            </SafeAreaView>
          </Animated.View>
          <ButtonBackStatements />
          <Settings />
          <Footer />
          <Menu />
          <Stores />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  bottomStatements: state.bottomStatements,
  rightHome: state.rightHome
});

export default connect(mapStateToProps)(Home);
