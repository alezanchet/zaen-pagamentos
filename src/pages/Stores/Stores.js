import React from "react";

import {
  View,
  SafeAreaView,
  Animated,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

import Header from "../../components/Header/Header.js";

import close from "../../assets/close.png";

import { styles } from "./Styles";

class Stores extends React.Component {
  render() {
    const { bottomStores } = this.props;

    return (
      <Animated.View style={{ ...styles.container, bottom: bottomStores }}>
        <LinearGradient
          colors={["#1a1a1a", "#000000"]}
          style={{ height: "100%", width: "100%" }}
        >
          <SafeAreaView>
            <Header
              image={close}
              title="Estabelecimentos"
              subtitle="Porto Alegre"
              page="Stores"
            />
          </SafeAreaView>
        </LinearGradient>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  bottomStores: state.bottomStores
});

export default connect(mapStateToProps)(Stores);
