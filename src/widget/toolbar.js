/*
toolbar 封装
 */
import React,{Component} from "react";
import {
    StyleSheet,
    View
} from "react-native";
import {
    StackNavigator
} from "react-navigation";


// export class Toolbar extends Component{
//     render(){
//         return(
//
//         );
//     }
// }

class Icon extends Component{
    render(){
        return(
          <View>
              <View style={styles.go}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
   go:{
       width:15,
       height:15,
       borderLeftWidth:2,
       borderBottomWidth:2,
       borderColor:'#fff',
       marginLeft:10,
       transform:[{rotate:'45deg'}] //将一个矩形旋转了45度

   }
});

