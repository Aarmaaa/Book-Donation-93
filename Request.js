import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Request extends React.Component {

  constructor(){
    super()
    this.state={
      userId: firebase.auth().currentUser.email,
      bookName: "",
      reasonToRequest: ""
    }
  }

  addRequest=(bookName, reason)=>{
    db.collection("requested_books").add({
      user_id : this.state.userId,
      book_name : this.state.bookName,
      reason : this.state.reasonToRequest,
      request_id : this.createUniqueId()
    })

    Alert.alert("Book requested Succesfully")

    this.setState({
      bookName : "",
      reasonToRequest: "",
    })
  }

  createUniqueId(){
    return Math.random().toString(36)
  }

    render(){
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer} >
            <Text style = {styles.title}>Request Book</Text>
          </View>
          <KeyboardAvoidingView style = {styles.keyBoardStyle}>
            
            <TextInput
            placeholder="Book Name"
            style={styles.inputs}
            onChangeText={(data)=>{
              this.setState({
                bookName: data
              })
            }}
            value={this.state.bookName}
            />

            <TextInput
            placeholder="Why do do need the book"
            style={[styles.inputs, {height: 300}]}
            onChangeText={(data)=>{
              this.setState({
                reasonToRequest: data
              })
            }}
            value={this.state.reasonToRequest}
            multiline={true}
            numberOfLines={8}
            />

            <TouchableOpacity style={styles.button} >
              <Text>Confirm Request</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00',
},
headerContainer:{
    flex:0.4,
    justifyContent:'center',
    alignItems:'center',
  },
  inputs:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
  },
})