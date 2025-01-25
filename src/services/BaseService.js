import axios from "axios";

export const createHttp = () =>{
    const http = axios.create({
        baseURL: 'https://ih-countries-api.herokuapp.com/countries'
    })

    http.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error)
    )
    return http

}