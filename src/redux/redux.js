import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Animated } from "react-native";

import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const initialState = {
  //------Bottom------
  bottomStores: new Animated.Value(height),
  bottomStatements: new Animated.Value(height / 2),
  bottomFooter: new Animated.Value(0),
  bottomMenu: new Animated.Value(0.065 * height),
  bottomBackStatements: new Animated.Value(-0.05 * height),
  bottomX: new Animated.Value(0.07 * height),
  //------Opacity------
  opacityMenu: new Animated.Value(0),
  opacityZ: new Animated.Value(1),
  opacityX: new Animated.Value(0),
  opacityListStatements: new Animated.Value(0),
  //-----ButtonMenu-----
  buttonImage: new Animated.Value(0),
  buttonText: new Animated.Value(1),
  button1Left: new Animated.Value(0.392 * width),
  button1Bottom: new Animated.Value(0.0505 * height),
  button2Left: new Animated.Value(0.392 * width),
  button2Bottom: new Animated.Value(0.0505 * height),
  opacityQRcode: new Animated.Value(0),
  //----Footer----
  leftBlueBar: new Animated.Value(0.11 * width),
  //-----Settings-----
  leftSettings: new Animated.Value(width),
  //-----Home-----
  rightHome: new Animated.Value(0),
  //------Boolean-----
  statements: false,
  menu: false,
  loadList: false,
  showButtonZ: true,
  homeSelected: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setStatements":
      return { ...state, statements: action.value };

    case "setMenu":
      return { ...state, menu: action.value };

    case "setLoadList":
      return { ...state, loadList: action.value };

    case "setShowButtonZ":
      return { ...state, showButtonZ: action.value };

    case "setHomeSelected":
      return { ...state, homeSelected: action.value };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

const setStatements = boolean => {
  return { type: "setStatements", value: boolean };
};

const setMenu = boolean => {
  return { type: "setMenu", value: boolean };
};

const setLoadList = boolean => {
  return { type: "setLoadList", value: boolean };
};

const setShowButtonZ = boolean => {
  return { type: "setShowButtonZ", value: boolean };
};

const setHomeSelected = boolean => {
  return { type: "setHomeSelected", value: boolean };
};

export { setStatements, setMenu, setLoadList, setShowButtonZ, setHomeSelected };
