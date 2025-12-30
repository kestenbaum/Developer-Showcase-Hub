import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000,
    headers: {"Content-Type": "application/json"},
})