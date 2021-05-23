import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import danger from "../pic/danger.png";

export class Home extends Component {
  // handlerPress(){
  //     i = this.state.number + 1
  //     if(i == 3){
  //         this.props.navigation.navigate("laporan")
  //     }else{
  //         console.log(i)
  //     }

  // }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("laporan");
          }}
        >
          <Text style={styles.textBtn}>Laporan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("history");
          }}
        >
          <Text style={styles.textBtn}>History Laporan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("map");
          }}
        >
          <Text style={styles.textBtn}>Map Kejadian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.replace("login");
          }}
        >
          <Text style={styles.textBtn}>Keluar</Text>
        </TouchableOpacity>

        <View style={styles.danger}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("laporan");
            }}
          >
            <Image source={danger} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: 120,
    height: 100,
  },

  danger: {
    justifyContent: "center",
    alignItems: "center",
  },

  textBtn: {
    textAlign: "center",
    borderWidth: 3,
    padding: 5,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 20,
    borderColor: "slateblue",
  },

  btn: {
    textAlign: "center",
    borderWidth: 3,
    padding: 5,
    marginTop: 100,
    marginLeft: 150,
    marginRight: 150,
    borderRadius: 50,
    borderColor: "red",
  },
});
