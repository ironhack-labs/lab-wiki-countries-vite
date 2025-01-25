import { createHttp } from "./BaseService";

const http = createHttp()

export const listCountries = () => http.get('/') 

export const getCountry = (id) => http.get(`/${id}`)