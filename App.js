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
import {BookList} from "./android_views/book/bookList";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MOCKED_MOVIES_DATA = [
    {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

type Props = {};
export default class App extends Component<Props> {
    render() {
        let movie = MOCKED_MOVIES_DATA[0];
        return (
                <View style={{flex:1}}>
                    <BookList/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textContainer:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    thumbnail:{
        flex:1,
        width:53,
        height:81
    }
});
