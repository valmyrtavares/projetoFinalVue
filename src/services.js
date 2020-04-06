import axios from "axios";

const axiosIntance = axios.create({
    baseURL: "/produto"
})

axiosIntance.get("/produtos")

export const api = {
    get(endpoint){
        return axiosIntance.get(endpoint)
    }
};