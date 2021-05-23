import axios from "axios";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import { UserAction } from "../redux/Action";
import lapor from "../pic/lapor.png";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props));
  }
  getData = () => {
    axios.get("");
  };

  handleLogin() {
    axios
      .get(`http://192.168.100.88:5001/user/name/${this.props.dataName}`)
      .then((response) => {
        alert("Selamat Datang " + response.data.name);
        this.props.UserAction("id", response.data.id);
        this.props.UserAction("name", response.data.name);
        this.props.UserAction("email", response.data.email);
        this.props.UserAction("phone", response.data.phone);
        this.props.UserAction("address", response.data.address);
        this.props.UserAction("isLogin", true);

        this.props.navigation.replace("home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Image source={lapor} style={styles.img} />
        </View>

        <Text style={styles.text}> Name </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(value) => {
            this.props.UserAction("name", value);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleLogin();
          }}
        >
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("registrasi");
          }}
        >
          <Text style={styles.textBtn}>Registrasi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataRegis: state.UserReducer,
  dataName: state.UserReducer.name,
});

const mapDispatchToProps = {
  UserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
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
  img: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  textInput: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
  },

  text: {
    fontSize: 20,
    paddingLeft: 5,
  },
});
