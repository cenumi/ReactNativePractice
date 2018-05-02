/*
    工具类
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator
} from 'react-native';

export const Util = {
    // 屏幕尺寸
    windowSize:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },

    //基于 fetch 的 get 方法
    get:(url,successCallback,failCallback)=>{
        fetch(url)
            .then((response)=>response.json())
            .then((responseData)=>successCallback(responseData))
            .catch((error)=>failCallback)
    },

    //loading 效果
    loading:<ActivityIndicator/>

}