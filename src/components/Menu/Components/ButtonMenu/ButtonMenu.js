import React, { Component } from "react";

import { TouchableOpacity, Animated } from "react-native";

import { connect } from "react-redux";

import { styles } from "./Styles";

class ButtonMenu extends Component {
  render() {
    const { bottom, left, right, buttonImage, buttonText } = this.props;

    return (
      <Animated.View
        style={{
          ...styles.animatedView,
          bottom,
          left,
          right
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Animated.Image
            style={{ ...styles.image, height: buttonImage, width: buttonImage }}
            source={this.props.image}
          />
        </TouchableOpacity>
        <Animated.Text style={{ ...styles.textButton, fontSize: buttonText }}>
          {this.props.title}
        </Animated.Text>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  buttonImage: state.buttonImage,
  buttonText: state.buttonText
});

export default connect(mapStateToProps)(ButtonMenu);
