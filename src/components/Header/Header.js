import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Animated,
  Dimensions
} from "react-native";

import { connect } from "react-redux";
import { setBottomStores } from "../../redux/redux.js";

const { height } = Dimensions.get("window");
import { styles } from "./Styles";

class Header extends Component {
  buttonClick = () => {
    const { page } = this.props;

    if (page == "Stores") {
      Animated.timing(this.props.bottomStores, {
        toValue: height,
        duration: 300
      }).start();
    }
  };

  render() {
    const { image, title, subtitle } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.viewLateral}>
          <TouchableOpacity
            onPress={() => {
              this.buttonClick();
            }}
          >
            <Image style={styles.image} source={image} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <View style={styles.viewCenter}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textSubtitle}>{subtitle}</Text>
        </View>

        <View style={styles.viewLateral} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  bottomStores: state.bottomStores
});

const mapDispatchToProps = dispatch => ({
  setBottomStores: text => {
    dispatch(setBottomStores(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
