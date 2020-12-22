import React, {useState} from 'react';
import { Text, StyleSheet, View, Image } from "react-native";


const ResultDetail = ({result}) => {
console.log(result)

   return (
       <View> 
             <Image style={styles.img} source={{uri: result.image_url}} />
            <Text>{result.name}</Text>
            <Text>{result.reting} Stars, {result.review_count} Reviews</Text>
       </View>
   );
};

      

const styles = StyleSheet.create({
    img: {
        width: 250,
        borderRadius: 4,
        height: 120
      },
      name: {
          fontWeight: 'bold',
          
      }
})

export default ResultDetail