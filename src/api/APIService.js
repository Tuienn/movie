import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080",
    responseType: "json",
    // withCredentials: true,
});

API.defaults.timeout = 20000;
API.defaults.headers.post["Content-Type"] = "application/json";

API.interceptors.response.use(
    function (response) {
        if (response.data && response.data.error_code === 401) {
        }
        return response;
    },
    function (error) {
        if (
            error?.response?.status === 401 &&
            error?.response?.data?.code === 401
        ) {
        }

        return Promise.reject(error);
    }
);

export const apiService = async (method, url, params, data, headers) => {
    try {
        const response = await API({
            method,
            url,
            headers: headers,
            params,
            data,
        });
        return response.data;
    } catch (error) {
        throw error;
    } finally {
        console.log("finally");
    }
};

export default apiService;
