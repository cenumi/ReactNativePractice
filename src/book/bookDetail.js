/*
 图书详情页
 */
import React,{Component}from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import BookItem from './bookItem'
import {DOU_API} from "./../common/service";
import {Util} from "./../common/util";


export default class BookDetail extends Component{
    static navigationOptions=({navigation})=>({
        headerTitle:navigation.state.params.title,
    });

    constructor(props){
        super(props);
        this.state = {
            bookData: null
        };
    }

    getData(){
        let that = this;
        const url = DOU_API.book_info+this.props.navigation.state.params.id;
        Util.get(url,(data)=>{
            console.log(data);
           that.setState({
              bookData:data
           });
        },(err)=>{
            alert('获取失败');
        });
    }
    componentDidMount(){
        this.getData();

    }

    render(){
        return(
          <ScrollView style={styles.container}>
              {
                  this.state.bookData?
                      <View>
                          <BookItem book={this.state.bookData}/>
                          <View>
                              <Text style={styles.title}>图书简介</Text>
                              <Text style={styles.text}>{this.state.bookData.summary}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                              <Text style={styles.title }>作者简介</Text>
                              <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                          </View>
                      </View>:
                      <Text style={{flex:1}}>加载中...</Text>
              }
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'white'
   },
    title:{
       fontSize:16,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        fontWeight:'bold'
    },
    text:{
       marginLeft:10,
        marginRight:10,
        color:'#000D22'
    },

});



