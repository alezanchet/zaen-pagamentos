import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  Dimensions,
  Animated
} from "react-native";

import { setStatements, setLoadList } from "../../redux/redux.js";
import { connect } from "react-redux";

import lupa from "../../assets/lupa.png";

import { styles } from "./Styles";

const { height } = Dimensions.get("window");

class InputStatements extends Component {
  touchableInputClick = () => {
    const {
      statements,
      bottomStatements,
      bottomMenu,
      bottomFooter,
      bottomBackStatements,
      opacityListStatements
    } = this.props;

    if (!statements) {
      Animated.timing(bottomBackStatements, {
        toValue: 0.041 * height,
        duration: 500
      }).start();

      Animated.timing(bottomStatements, {
        toValue: 0,
        duration: 500
      }).start();

      Animated.timing(opacityListStatements, {
        toValue: 1,
        duration: 650
      }).start();

      Animated.timing(bottomMenu, {
        toValue: height * -0.13,
        duration: 500
      }).start();

      Animated.timing(bottomFooter, {
        toValue: height * -0.08,
        duration: 500
      }).start();

      this.props.setStatements(true);
      this.props.setLoadList(true);
    }
  };

  render() {
    const { statements } = this.props;
    return (
      <>
        {statements ? (
          <View style={styles.viewInput}>
            <TextInput
              placeholder="Movimentações"
              placeholderTextColor="#707070"
              style={styles.inputMovimentacoes}
            />
            <Image
              resizeMode="contain"
              source={lupa}
              style={styles.imageLupa}
            />
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.viewInput}
            onPress={() => {
              this.touchableInputClick();
            }}
          >
            <Text style={styles.textMovimentacoes}>Movimentacoes</Text>
            <Image
              resizeMode="contain"
              source={lupa}
              style={styles.imageLupa}
            />
          </TouchableOpacity>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  statements: state.statements,
  bottomStatements: state.bottomStatements,
  bottomFooter: state.bottomFooter,
  bottomMenu: state.bottomMenu,
  bottomBackStatements: state.bottomBackStatements,
  loadList: state.loadList,
  opacityListStatements: state.opacityListStatements
});

const mapDispatchToProps = dispatch => ({
  setStatements: boolean => {
    dispatch(setStatements(boolean));
  },

  setLoadList: boolean => {
    dispatch(setLoadList(boolean));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputStatements);
