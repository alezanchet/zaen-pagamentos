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

import store from "../../assets/store.png";
import avatar from "../../assets/avatar.png";

class HeaderHome extends React.Component {
  buttonStoreClick = () => {
    Animated.timing(this.props.bottomStores, {
      toValue: 0,
      duration: 300
    }).start();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewSuperior}>
          <Image
            style={styles.imageAvatar}
            resizeMode="contain"
            S
            source={avatar}
          />
          <TouchableOpacity
            style={styles.touchableStore}
            onPress={() => this.buttonStoreClick()}
          >
            <Image
              style={styles.imageStore}
              resizeMode="contain"
              source={store}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  bottomStores: state.bottomStores
});

export default connect(mapStateToProps)(HeaderHome);
