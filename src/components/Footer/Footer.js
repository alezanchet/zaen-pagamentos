import React from "react";

import { ImageBackground, Animated } from "react-native";

import { connect } from "react-redux";

import BlueBar from "./Components/BlueBar/BlueBar.js";
import ButtonHome from "./Components/ButtonHome/ButtonHome.js";
import ButtonSettings from "./Components/ButtonSettings/ButtonSettings.js";

import footer from "../../assets/footer.png";

import { styles } from "./Styles";

class Footer extends React.Component {
  render() {
    const { bottomFooter } = this.props;
    return (
      <Animated.View style={{ ...styles.footer, bottom: bottomFooter }}>
        <ImageBackground
          resizeMode="stretch"
          source={footer}
          style={styles.imageBackground}
        >
          <ButtonHome />

          <ButtonSettings />

          <BlueBar />
        </ImageBackground>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  bottomFooter: state.bottomFooter
});

export default connect(mapStateToProps)(Footer);
