import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, ImageBackground } from "react-native";


const SearchScreen = () => {
    const [term, setTerm] = useState('')

   return (
       <View> 
           <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTearmSubmit={() => console.log('term was submitted')}/>
           <Text>{term}</Text>
           
       </View>
   );
};
           

      

const styles = StyleSheet.create({

});

export default SearchScreen;