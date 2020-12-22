import axios from 'axios'
//import {API_KEY, CLIENT_ID} from "@env"
export default axios.create({
    baseURL: 'GET https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer `
    } 
})