import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation';
import firebase from 'firebase';


export default class SideBarMenu extends React.Component{
    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {{flex: 0.8}}>
                    <DrawerItems  />
                </View>
                
                <View style = {styles.logoutContainer}>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("Login")
                        firebase.auth().signOut()
                    }}
                    style={styles.logoutButton}
                    >
                        <Text style={styles.logoutText} >Log Out</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoutContainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
    paddingBottom: 30
    },
    logoutButton: {
        height: 30,
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },
    logoutText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
