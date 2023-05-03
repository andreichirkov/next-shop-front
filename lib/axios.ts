import axios from "axios";

export const $localDBHost = axios.create({
    baseURL: "http://localhost:4444/"
})