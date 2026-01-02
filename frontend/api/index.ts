import axios from "axios";

export const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    timeout: 10000,
    headers: {"Content-Type": "application/json"},
})