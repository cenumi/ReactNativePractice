/*
 使用react navigation 实现路由
 */
import React from 'react';
import {StackNavigator,TabNavigator,TabBarBottom} from "react-navigation";

import BookPage from './../book/bookPage'; //图书首页
import BookDetail from './../book/bookDetail';//图书详情


import MoviePage from './../movie/moviePage'; //电影首页


const Tabs = TabNavigator({
    BookPage: {
        screen: BookPage,
    },
    MoviePage:{
        screen: MoviePage,
    },
},{
    tabBarPosition:'bottom',
    backBehavior:'none',
    tabBarComponent:TabBarBottom
});

export default StackNavigator({
    Main:{
        screen:Tabs
    },
    BookDetailPage:{
        screen: BookDetail
    }
},{
    headerMode:'screen',
})
