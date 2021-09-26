import React, { Component } from "react";

import { View } from "react-native";

import Progress from "./Components/Progress/Progress.js";
import Gradient from "./Components/Gradient/Gradient.js";

export default class CircleProgress extends Component {
  render() {
    return (
      <>
        <Progress />
        <Gradient />
      </>
    );
  }
}
