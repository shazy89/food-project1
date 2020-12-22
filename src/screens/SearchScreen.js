import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, TextInput, ImageBackground, Button  } from "react-native";
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('')

    return (
        <View> 
            <SearchBar term={term} 
                       onTermChange={setTerm} 
                       onTearmSubmit={searchApi}/>
             { errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>LENGTH IS - {results.length}</Text>
   
        </View>
    );
   };
            
   const styles = StyleSheet.create({
   
   });
   
   export default SearchScreen;
            

           

      
