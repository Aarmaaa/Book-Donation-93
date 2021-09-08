import React from 'react';
import {View, Text} from 'react-native';
import firebase from "firebase";
import db from '../config';

export default class Setting extends React.Component{

    constructor(){
        super()
        this.state={
            emailId: "",
            first_name: "",            
            last_name:"",
            address: "",
            contact: ""
        }
    }

    getUserDetails=() => {
        var email = firebase.auth().currentUser.email
        db.collection('users').where('email_id',  '==', email ).get()
        .then((document) => {
            document.forEach((doc) => {
                var data = doc.data()
                this.setState({
                    emailId: data.email_id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    address: data.address,
                    contact: data.contact
                })
            })
        })
    }

    componentDidMount(){
        this.getUserDetails();
    }

    render(){
        return(
            <View>
                {/* i have to do it */}
            </View>
        )
    }
}