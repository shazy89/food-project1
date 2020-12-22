import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, TextInput, ImageBackground, Button  } from "react-native";
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async () => {
    //    /search?limit=50 query string
        try {
      const response = await yelp.get('/search', {
          params: {
            limit:50,
            term,
            location: 'san jose'  
          }
      })
      console.log(response)
      setResults(response.data.businesses)
    } catch (err) {
        setErrorMessage('Something went wrong')
    } 
 }

useEffect(() => searchApi(),[])
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