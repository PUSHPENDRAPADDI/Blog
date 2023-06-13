import axios from 'axios';

const API_URL = 'http://localhost:8000'
const axiosInstance = axios.create({
    baseUrl: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        // Stop global loader here
        return processResponce(response)
    },
    function (error) {
        // Stop global loader here
        return Promise.reject(processError(error))
    }
)

// if sucess => return 
const processResponce = (response) => {
    if (response.status === 200) {
        return { isSucess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response.status,
            msg: response.msg,
            code: response.code,
        }
    }
}


const processError = (error) => {
    if (error.response === 200) {
        // Request made and server responded with a status other
    } else if (error.request) {
        
    }else{

    }
}