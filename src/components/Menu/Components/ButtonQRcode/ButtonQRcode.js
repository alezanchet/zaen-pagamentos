import React, { Component } from "react";

import { Animated, TouchableOpacity, Image } from "react-native";

import { connect } from "react-redux";

import qrcode from "../../../../assets/qrcode.png";

import { styles } from "./Styles";

class ButtonQRcode extends Component {
  render() {
    const { opacityQRcode } = this.props;

    return (
      <Animated.View
        style={{ ...styles.animatedQRcode, opacity: opacityQRcode }}
      >
        <TouchableOpacity>
          <Image source={qrcode} styles={styles.image} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  opacityQRcode: state.opacityQRcode
});

export default connect(mapStateToProps)(ButtonQRcode);
