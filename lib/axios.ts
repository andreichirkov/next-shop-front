import axios from "axios";


export const $host = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})