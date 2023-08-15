import axios from 'axios'
import { useEffect} from 'react'
import { GOOGLE_CALL_BACK, baseURl } from '../Api/Api'
import { useLocation } from 'react-router-dom'
import Cookie from "cookie-universal"

const GooglecallBack = () => {
  const cookie = Cookie();
    const location = useLocation();
    useEffect(() => {
    async function Googlecall(){
        try{
           
     const res = await axios.get(`${baseURl}/${GOOGLE_CALL_BACK}${location.search}`);
    const token = res.data.access_token;
    cookie.set("e-commerce",token);
    } catch(err){
            console.log(err)

        }
    } Googlecall();
    }, [])
   
  return (
    <div>GooglecallBack</div>
  )
}

export default GooglecallBack