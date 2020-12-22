import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/RestaurantList'
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();
   
    return (
        <View> 
            <SearchBar term={term} 
                       onTermChange={setTerm} 
                       onTearmSubmit={searchApi}/>
             { errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>LENGTH IS - {results.length}</Text>
             <ResultsList title='Cost Effective' />
             <ResultsList title='Bit Price'/>
             <ResultsList title='Big Spender'/>
        </View>
    );
   };
            
   const styles = StyleSheet.create({
   
   });
   
   export default SearchScreen;
            

           

      
