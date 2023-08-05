import axios from "axios";


const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
});

export const get = async(api, params) => {
    const res = await request.get(api, params)
    // console.log(res)
    return res.data;
}

export default request;