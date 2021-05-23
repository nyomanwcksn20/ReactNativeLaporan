import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { UserAction } from '../redux/Action'
import axios from 'axios'

class Register extends Component {

    constructor(props){
        super(props)
    }

    handleInputData(){
        axios.post("http://192.168.100.88:5001/user/register/",this.props.dataRegis)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.navigate("home")
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.text}> Name </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(value)=>{this.props.UserAction("name",value)}}
                />
                <Text style={styles.text}> Email </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(value)=>{this.props.UserAction("email",value)}}
                />
                <Text style={styles.text}> Phone </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    onChangeText={(value)=>{this.props.UserAction("phone",value)}}
                />
                <Text style={styles.text}> Address </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    onChangeText={(value)=>{this.props.UserAction("address",value)}}
                />
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputData()}}><Text style={styles.textBtn}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegis:state.UserReducer
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding:20,
    },
    textBtn:{
        textAlign:'center',
        borderWidth:3,
        padding:5,
        marginLeft:100,
        marginRight:100,
        borderRadius:20,
        borderColor:"slateblue"
    },
    text:{
        fontSize:20,
        paddingLeft:5,
    }
  });