import * as request from "~/utils/request";
import axios from "axios";
export const httpGetUserById = (id) => {
    try {
        const res = request.get(`/users/${id}`);
        return res;
    } catch (error) {
        console.log(error.response.data);
    }
};

export const httpPutUserById = (id,username,phone,address,password) => {
    const data ={username,phone,address,password};
    try {
        return axios
        .put(`http://localhost:5000/users/${id}`, data)
        .then((response) => {
            return response.data;
        });
    } catch (error) {
        console.log(error.response.data);
    }
};
