import axios from "axios";


const instance = axios.create({
    baseURL:'http://localhost:5000/api/v1',withCredentials:true
})
const usePublicAxios = () => {
    return instance
};


export default usePublicAxios;