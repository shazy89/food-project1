import axios from 'axios'
//import {API_KEY, CLIENT_ID} from "@env"
export default axios.create({
    baseURL: 'GET https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ejCu1DPTSYmxbVrBxCDYkkscyQ-Qp2j7my_eUb6RK6h7XkVyecvaLqUSIw54TlwYoKAuuMVs2suEqa4v4KyNgcG0Of0iGZRy11HYyKoK-l-86wVk9sQ-mk8-1OrgX3Yx`
    } 
})