import React from "react";

import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  Animated
} from "react-native";
const { height } = Dimensions.get("window");
import firebase from "firebase";
import { connect } from "react-redux";

import { styles } from "./Styles";

class ListStatements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      segunda: [],
      terca: [],
      quarta: []
    };
  }

  async componentDidMount() {
    await firebase
      .database()
      .ref("transactions/segunda")
      .once("value")
      .then(snapshot => {
        var segunda = [];
        snapshot.forEach(child => {
          segunda.push({
            amount: child.val().amount,
            picture: child.val().picture,
            subtitle: child.val().subtitle,
            title: child.val().title
          });
        });

        this.setState({ segunda });
      });

    await firebase
      .database()
      .ref("transactions/terca")
      .once("value")
      .then(snapshot => {
        var terca = [];
        snapshot.forEach(child => {
          terca.push({
            amount: child.val().amount,
            picture: child.val().picture,
            subtitle: child.val().subtitle,
            title: child.val().title
          });
        });

        this.setState({ terca });
      });

    await firebase
      .database()
      .ref("transactions/quarta")
      .once("value")
      .then(snapshot => {
        var quarta = [];
        snapshot.forEach(child => {
          quarta.push({
            amount: child.val().amount,
            picture: child.val().picture,
            subtitle: child.val().subtitle,
            title: child.val().title
          });
        });

        this.setState({ quarta });
      });

    this.setState({ loading: false });
  }

  renderItem = ({ item }) => {
    const { title, subtitle, amount, picture } = item;

    var color;

    if (amount == "100,00") {
      color = "#51B99C";
    } else {
      color = "#EA2867";
    }

    return (
      <View style={styles.listItem}>
        <Image
          resizeMode="contain"
          source={{
            uri: picture
          }}
          style={styles.imageItem}
        />
        <View style={styles.viewDescription}>
          <View>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textSubtitle}>{subtitle}</Text>
          </View>
          <Text style={{ ...styles.textAmount, color }}>R$ {amount}</Text>
        </View>
      </View>
    );
  };

  renderSeparator() {
    return <View style={{ height: 10 }}></View>;
  }

  render() {
    const { segunda, terca, quarta } = this.state;
    const { loadList, opacityListStatements } = this.props;
    return (
      <>
        {loadList ? (
          <Animated.ScrollView
            style={{ ...styles.container, opacity: opacityListStatements }}
            contentContainerStyle={{ paddingBottom: 0.15 * height }}
          >
            <Text style={{ ...styles.textDay, marginTop: 0.005 * height }}>
              Segunda 03/12
            </Text>
            <FlatList
              data={segunda}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.title}
            />

            <Text style={styles.textDay}>Terça 04/12</Text>
            <FlatList
              data={terca}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.title}
            />

            <Text style={styles.textDay}>Quarta 05/12</Text>
            <FlatList
              data={quarta}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.title}
            />

            <Text style={styles.textDay}>Quinta 06/12</Text>
            <FlatList
              data={segunda}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.title}
            />

            <Text style={styles.textDay}>Sexta 07/12</Text>
            <FlatList
              data={terca}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.title}
            />

            <Text style={styles.textDay}>Sábado 08/12</Text>
            <FlatList
              data={quarta}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.title}
            />

            <Text style={styles.textDay}>Domingo 09/12</Text>
            <FlatList
              data={segunda}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.title}
            />
          </Animated.ScrollView>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loadList: state.loadList,
  opacityListStatements: state.opacityListStatements
});

export default connect(mapStateToProps)(ListStatements);
