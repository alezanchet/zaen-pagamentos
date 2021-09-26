import React from "react";

import { View, Text } from "react-native";

import { styles } from "./Styles";

export default class Graph extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewSuperior}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.ball} />
            <Text style={styles.textReceita}>Receita</Text>
            <View style={{ ...styles.ball, backgroundColor: "#EA2867" }} />
            <Text style={{ ...styles.textReceita, color: "#EA2867" }}>
              Gastos
            </Text>
          </View>
        </View>

        <View style={styles.viewColumns}>
          <View style={styles.column}>
            <View style={{ ...styles.columnGreen, height: "50%" }}></View>
            <View style={{ ...styles.columnRed, height: "20%" }}></View>
          </View>
          <View style={styles.column}>
            <View style={{ ...styles.columnGreen, height: "60%" }}></View>
            <View style={{ ...styles.columnRed, height: "10%" }}></View>
          </View>
          <View style={styles.column}>
            <View style={{ ...styles.columnGreen, height: "80%" }}></View>
            <View style={{ ...styles.columnRed, height: "50%" }}></View>
          </View>
          <View style={styles.column}>
            <View style={{ ...styles.columnGreen, height: "50%" }}></View>
            <View style={{ ...styles.columnRed, height: "40%" }}></View>
          </View>
          <View style={styles.column}>
            <View style={{ ...styles.columnGreen, height: "100%" }}></View>
            <View style={{ ...styles.columnRed, height: "40%" }}></View>
          </View>
          <View style={styles.column}>
            <View style={{ ...styles.columnGreen, height: "50%" }}></View>
            <View style={{ ...styles.columnRed, height: "0%" }}></View>
          </View>
          <View style={styles.column}>
            <View style={{ ...styles.columnGreen, height: "0%" }}></View>
            <View style={{ ...styles.columnRed, height: "40%" }}></View>
          </View>
        </View>

        <View style={styles.viewDays}>
          <Text
            style={{ ...styles.textDay, color: "white", fontWeight: "normal" }}
          >
            S
          </Text>
          <Text
            style={{ ...styles.textDay, color: "white", fontWeight: "normal" }}
          >
            T
          </Text>
          <Text
            style={{ ...styles.textDay, color: "white", fontWeight: "normal" }}
          >
            Q
          </Text>
          <Text
            style={{ ...styles.textDay, color: "#00aab3", fontWeight: "bold" }}
          >
            Q
          </Text>
          <Text
            style={{ ...styles.textDay, color: "white", fontWeight: "normal" }}
          >
            S
          </Text>
          <Text
            style={{ ...styles.textDay, color: "white", fontWeight: "normal" }}
          >
            S
          </Text>
          <Text
            style={{ ...styles.textDay, color: "white", fontWeight: "normal" }}
          >
            D
          </Text>
        </View>
      </View>
    );
  }
}
