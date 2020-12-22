import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, ImageBackground } from "react-native";
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async () => {
      const response = await yelp.get('/search', {
          params: {
              
          }
      })
      setResults(response.data.businesses)
       
    }
         
   return (
       <View> 
           <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTearmSubmit={() => console.log('term was submitted')}/>
           <Text>{term}</Text>
           <Text>LENGTH IS - {results.length}</Text>
       </View>
   );
};
         
           

      

const styles = StyleSheet.create({

});

export default SearchScreen;