import React, {useState} from 'react';
import { Text, StyleSheet, View, ScrollView } from "react-native";
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
       // a lot of styling issues can be resolve by using flex; 1
    return (
        <> 
            <SearchBar term={term} 
                       onTermChange={setTerm} 
                       onTearmSubmit={searchApi}/>
             { errorMessage ? <Text>{errorMessage}</Text> : null}
              <ScrollView > 
                    <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
                    <ResultsList results={filterResultsByPrice('$$')} title='Bit Price'/>
                    <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
             </ScrollView>
        </>
    );
   };
           // SrollView will allow scroll optin for this components
         //  whatever we want to scroll will wrap with scroll view
        //     <ScrollView > 
        //                  <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
        //                 <ResultsList results={filterResultsByPrice('$$')} title='Bit Price'/>
        //               <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
        //     </ScrollView  >
   const styles = StyleSheet.create({
   
   });
   
   export default SearchScreen;
            

           

      
