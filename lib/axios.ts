import axios from "axios";


export const $host = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const $localDBHost = axios.create({
    baseURL: "http://localhost:4444/"
})