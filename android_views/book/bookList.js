/*
  图书列表模块：搜索栏，图书列表
  从豆瓣接口获取图书数据
 */

import React,{Component} from "react";
import {AppRegistry,Text,StyleSheet,View,Image,TouchableOpacity,FlatList,ScrollView} from "react-native";
import {BookItem} from "./bookItem";
import {SearchBar} from "./../widget/searchBar"


const Util = require('./../common/util');
const Service = require('./../common/service');

export class BookList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loading: true,
            keyword:'react'
        };

    }
    componentDidMount(){
        return this.getList();
    }

    getList(){
        let url = Service.DOU_API.book_search+'?count=20&q='+this.state.keyword;
        let that = this;
        return Util.Util.get(url,(data)=>{
            if(!data.books || data.books.length === 0){
                this.setState({
                   loading:false
                });
                return alert('未查询到相关书籍');
            }
            console.log(data);
            that.setState({
                dataSource:data.books,
                loading:false
            });
        },(error)=>{
            that.setState({
                loading:false
            });
            alert('获取失败');
        });
    }


    _renderItem = (item,index)=>{
        // console.log(item);
        return (<BookItem book={item.item} onPress={this._onItemClicked.bind(this,item.item,index)}/>);
    };

    _searchBar = ()=>{
        return (<SearchBar placeholder='请输入图书名称'
                           onPress={this._onSearchClicked}
                           onChangeText={this._onChangeText}/>);
    };
    _keyExtractor = (item, index) => index.toString();

    _emptyView = ()=>{
      return(<Text>无相关数据</Text>);
    };

    _onChangeText = (text)=>{
      this.setState({
        keyword:text
      });
    };


    _onSearchClicked = ()=>{
      this.getList();
    };

    _onItemClicked = (item)=>{
        alert('clicked'+item.title);
    };



    render(){
        return (
                <View style={{flex: 1}}>
                    <FlatList
                        ListHeaderComponent={this._searchBar}
                        ListEmptyComponent={this._emptyView}
                        refreshing={this.state.loading}
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            );
        }
}

const styles = StyleSheet.create({

});

