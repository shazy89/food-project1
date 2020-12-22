import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, ImageBackground } from "react-native";


const ResultDetail = ({result}) => {
console.log(result)

   return (
       <View> 
            <Text>{result.name}</Text>
       </View>
   );
};

      

const styles = StyleSheet.create({

})

export default ResultDetail