import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async searchTerm => {
    //    /search?limit=50 query string
     try {
      const response = await yelp.get('/search', {
          params: {
            limit:50,
            term: searchTerm,
            location: 'san jose'  
          }
      })
      setResults(response.data.businesses)
   }catch (err) {
        setErrorMessage('Something went wrong')
    } 
 };

useEffect(() => {
 searchApi('pizza');
},[]);
// we return components we need inside the array than we can request them inside the screens
return [searchApi, results, errorMessage];
};