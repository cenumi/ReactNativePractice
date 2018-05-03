/*
 bookPage
 */

import React,{Component} from 'react';
import {View} from "react-native";
import BookList from "./bookList";



export default class BookPage extends Component{
    static navigationOptions = {
        headerTitle:'图书',
        tabBarLabel:'图书',
        headerStyle:{
            height:0
        }
    };



    render(){
        return(
            <View style={{flex:1}}>
                <BookList {...this.props}/>
            </View>

        );
    }
}