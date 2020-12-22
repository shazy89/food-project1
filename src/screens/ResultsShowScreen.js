import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";


const ResultsShowScreen = ({navigation}) => {
const id = navigation.getParam('id')
console.log(id)
   return (
       <View> 
            <Text> Current SHow</Text>
       </View>
   );
};

      

const styles = StyleSheet.create({

});

export default ResultsShowScreen;