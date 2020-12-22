import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = price => {
         return results.filter(result => {
             return result.price === price
         })
      }
    return (
        <View> 
            <SearchBar term={term} 
                       onTermChange={setTerm} 
                       onTearmSubmit={searchApi}/>
             { errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>LENGTH IS - {results.length}</Text>
             <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
             <ResultsList results={filterResultsByPrice('$$')} title='Bit Price'/>
             <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
        </View>
    );
   };
            
   const styles = StyleSheet.create({
   
   });
   
   export default SearchScreen;
            

           

      
