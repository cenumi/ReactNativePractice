/*
 moviePage
 */

import React,{Component} from 'react';
import {View,Text} from "react-native";




export default class BookPage extends Component{
    static navigationOptions = {
        headerTitle:'电影',
        tabBarLabel:'电影',
        headerStyle:{
            height:0
        }
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <Text>电影</Text>
            </View>
        );
    }
}