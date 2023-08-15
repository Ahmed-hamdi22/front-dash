import axios from 'axios'
import React, { useState } from 'react'
import { REGISTER, baseURl } from '../Api/Api'
import "../Css/base/madia.css"
import Loading from './Loading'
import Cookie from "cookie-universal"
import "../Css/commponent/google.css"
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  // state
  const [form,setform] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate();

  //loader
    const [loading, setloading] = useState(false);
  //error
const [err,seterror] = useState("")
//cookie
const cookie = Cookie();
//handelfotmchange
function handelchange (e){

setform({...form,[e.target.name]:e.target.value})
}

//handelsubmit

async function handelsubmit(e){
  e.preventDefault();
  setloading(true)
  console.log("run")
  try{
   const res= await axios.post(`${baseURl}/${REGISTER}`,form);
    setloading(false)
    const token = res.data.token;
    cookie.set('e-commerce',token);
    navigate("/dashboard/user",{ replace : true});

  }catch(err){
    setloading(false)
    console.log(err)
    if(err.response.status === 422){
    seterror("email is already been taken");
  }else{
    seterror("internet server err")}
  }
}



  return (
  
    <>
    
    {loading && <Loading/>}
    <div className='container'>

      <div className='row'style={{height:"100vh"}}>
        <Form className='form' onSubmit={handelsubmit}>
        <div className='custom-form'>
          <h1 className='mb-3'>Register Now</h1>
      
     <Form.Group className='form-custom' >
      <Form.Control
       name='name'
      type='text'
        placeholder='name' 
      //  id='email'
       value={form.name}
       onChange={handelchange}
       required/>
      
        <Form.Label htmlFor='name'>Name </Form.Label>
        </Form.Group>
     
        <Form.Group className='form-custom'>
      <Form.Control
     name="email"
      type='email'
       placeholder='email'
      //  id='email'
       value={form.email}
       onChange={handelchange}
       required/>
      
        <Form.Label htmlFor='email'>email </Form.Label>
        </Form.Group>
     

      <Form.Group className='form-custom'>
      <Form.Control 
     name='password'
      type='password' 
       placeholder='passwoad' 
      // id='password'
      value={form.password}
      onChange={handelchange}
      required/>
     
      <Form.Label  htmlFor='name'>passwoad </Form.Label>
      </Form.Group>
    

     
      <button className='button btn-primary'>Register</button>
     <div className='google-btn'>
     <a href={`http://127.0.0.1:8000/login-google`}>
      <div className='gooel-icon-apper'>
        <img 
        className='gooel-icon'
        src='http://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
       alt='sigin in with google'
       />
        </div> 
  
      <div>
      
      <p className='btn-text'>Register with google</p>
      </div>
    </a>
     </div>
      {err !== ""&& <span className='error'>{err}</span>}

      </div>
        </Form>
    </div>
    
    </div>
    </>
  
  )
}

export default Register