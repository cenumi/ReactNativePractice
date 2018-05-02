/*
 图书详情页
 */
import React,{Component}from "react";
import {Text,View,StyleSheet} from "react-native";


export default class BookDetail extends Component{
    static navigationOptions=({navigation})=>({
        headerTitle:navigation.state.params.title,
    });

    render(){
        return(
          <Text>详情</Text>
        );
    }
}



