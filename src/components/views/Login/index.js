import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {Navigation} from 'react-native-navigation';


class Login extends Component{

    goToScreen=(screenName)=>{
        Navigation.push(this.props.componentId,{
            component: {
                name: screenName
            }
        })
    }


    render(){
        return(
            <View style={styles.container}>
                <Button
                title="goToHome"
                onPress={()=>this.goToScreen('sellitApp.Home')}
                />
                <Button
                title="AddPost"
                onPress={()=>this.goToScreen('sellitApp.AddPost')}
                />
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});