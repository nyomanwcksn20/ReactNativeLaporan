import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default class History extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: [],
      name: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    //Make a request for a user with a given ID
    axios
      .get(`http://192.168.100.88:5001/laporan/${this.state.name}`)
      .then((response) => {
        // console.log(response.data")
        let data = response.data;
        this.setState({ data: data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.border}>
        <Text style={{ fontSize: 18 }}>Nama : {item.name}</Text>
        <Text style={{ fontSize: 18 }}>Kejadian : {item.kejadian}</Text>
        <Text style={{ fontSize: 18 }}>Alamat : {item.alamat}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  border: {
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "slateblue",
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
});
