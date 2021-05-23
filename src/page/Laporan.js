import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import { LaporanAction } from "../redux/Action";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

class Laporan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: "Perampokan",
    };
  }

  handleInputData() {
    axios
      .post("http://192.168.100.88:5001/laporan/lapor/", this.props.dataLapor)
      .then((response) => {
        alert(JSON.stringify(response.data));
        this.props.navigation.navigate("home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}> Name </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(value) => {
            this.props.LaporanAction("name", value);
          }}
        />

        <Text style={styles.text}> Kejadian </Text>
        <Picker
          selectedValue={this.state.type}
          onValueChange={(value) => {
            this.setState({ type: value });
          }}
        >
          <Picker.Item label="Perampokan" value="Perampokan" />
          <Picker.Item label="Pencurian" value="Pencurian" />
          <Picker.Item label="Pembunuhan" value="Pembunuhan" />
          <Picker.Item label="Kecelakaan" value="Kecelakaan" />
          <Picker.Item label="Kebakaran" value="Kebakaran" />
        </Picker>

        <Text style={styles.text}> Alamat </Text>
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          onChangeText={(value) => {
            this.props.LaporanAction("alamat", value);
          }}
        />
        <Text style={styles.text}> Keterangan </Text>
        <TextInput
          style={styles.input}
          placeholder="Keterangan"
          onChangeText={(value) => {
            this.props.LaporanAction("keterangan", value);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleInputData();
          }}
        >
          <Text style={styles.textBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataLapor: state.LaporanReducer,
});

const mapDispatchToProps = {
  LaporanAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Laporan);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    padding: 20,
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
  text: {
    fontSize: 20,
    paddingLeft: 5,
  },
});
