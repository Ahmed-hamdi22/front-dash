import axios from "axios"
import Cookie from "cookie-universal"
import {baseURl } from '../Api/Api'

const cookie = Cookie();
const token = cookie.get("e-commerce");
export const Axois = axios.create({

    baseURL : baseURl,
    headers : {
        Authorization: `Bearer ${token}`
    }

})