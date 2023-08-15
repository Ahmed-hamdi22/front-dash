import axios from 'axios'
import React, { useState } from 'react'
import { LOGIN, baseURl } from '../Api/Api'
import Loading from './Loading'
import Cookie from "cookie-universal"
import "../Css/commponent/google.css"
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom'

const Longin = () => {
  // state
  const [form,setform] = useState({
    email: '',
    password: '',
  })
  // console.log(form)
  // const navigate = useNavigate();
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
  setloading(true);

  try{
    const res = await axios.post(`${baseURl}/${LOGIN}`,{
      email: form.email,
      password : form.password,
    });
    setloading(false);
    const token = res.data.token;
    const role = res.data.user.role;
    const go = role === '199' ? 'user' : 'wirter';
    cookie.set('e-commerce',token);
  window.location.pathname =`/dashboard/${go}`;
    
console.log(role)
    console.log(res);
  }catch(err){
    setloading(false)
    if(err.response.status === 401){
      seterror("wrong email or password");
    }else{
      seterror("internal server error")
    }
  }
}


  return (
    <>
    
    {loading && <Loading/>}
    <div className='container'>

    <div className='row'style={{height:"100vh"}}>
        <Form className='form' onSubmit={handelsubmit}>
        <div className='custom-form'>
          <h1>login</h1>
      
        <Form.Group className='form-custom' 
        // controlId="exampleForm.ControlInput1"
        >

      <Form.Control
     name='email'
      type='email'
       placeholder='email'
      
       value={form.email}
       onChange={handelchange}
       required/>
      
        <Form.Label>email </Form.Label>
        </Form.Group>
     
     

      <Form.Group className='form-custom'
      //  controlId="exampleForm.ControlInput2"
       >
      <Form.Control 
     name='password'
      type='password' 
       placeholder='passwoad' 
      id='password'
      value={form.password}
      onChange={handelchange}
      required/>
     
      <Form.Label  htmlFor='name'>passwoad </Form.Label>
      </Form.Group>
    

     
      <button className='button btn-primary'>submit</button>
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
      
      <p className='btn-text'>sign up with google</p>
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

export default Longin