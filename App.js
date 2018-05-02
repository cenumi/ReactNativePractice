/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Route from './src/common/route';




export default class App extends Component<props>{
    render(){
        return(
            <Route/>
        );
    }
}


