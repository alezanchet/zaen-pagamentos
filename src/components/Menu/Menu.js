import React from "react";

import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { connect } from "react-redux";

import ButtonMenu from "./Components/ButtonMenu/ButtonMenu.js";
import ButtonX from "./Components/ButtonX/ButtonX.js";
import ButtonZ from "./Components/ButtonZ/ButtonZ.js";
import ButtonQRcode from "./Components/ButtonQRcode/ButtonQRcode.js";

import addFunds from "../../assets/addFunds.png";
import transfer from "../../assets/transfer.png";
import bankSlip from "../../assets/bankSlip.png";
import phone from "../../assets/phone.png";

import { styles } from "./Styles";

class Menu extends React.Component {
  render() {
    const {
      menu,
      opacityMenu,
      button1Bottom,
      button1Left,
      button2Bottom,
      button2Left
    } = this.props;
    return (
      <>
        {menu ? (
          <>
            <Animated.View
              style={{ ...styles.viewGradient, opacity: opacityMenu }}
            >
              <LinearGradient
                style={styles.gradientMenu}
                colors={["#00000000", "#000000d9", "#000000"]}
              ></LinearGradient>
            </Animated.View>

            <ButtonQRcode />

            <ButtonX />

            <ButtonMenu
              image={addFunds}
              title="Inserir Saldo"
              bottom={button1Bottom}
              left={button1Left}
            />
            <ButtonMenu
              image={transfer}
              title="Transferência"
              bottom={button2Bottom}
              left={button2Left}
            />
            <ButtonMenu
              image={bankSlip}
              title="Boleto"
              bottom={button2Bottom}
              right={button2Left}
            />
            <ButtonMenu
              image={phone}
              title="Recarga"
              bottom={button1Bottom}
              right={button1Left}
            />
          </>
        ) : null}

        <ButtonZ />
      </>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
  opacityMenu: state.opacityMenu,
  button1Bottom: state.button1Bottom,
  button1Left: state.button1Left,
  button2Bottom: state.button2Bottom,
  button2Left: state.button2Left
});

export default connect(mapStateToProps)(Menu);
