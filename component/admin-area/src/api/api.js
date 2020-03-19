import axios from "axios";

export const API_CALL =
{
    get : (endpoint) => {
        return axios.get(endpoint/*, { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } }*/);
    },

    post : (endpoint, data) => {
        return axios.post(endpoint, data/*, { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } }*/);
    },

    put : (endpoint, data) => {
        return axios.put(endpoint, data/*, { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } }*/);
    },

    delete : (endpoint) => {
        return axios.delete(endpoint/*, { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } }*/);
    }
};