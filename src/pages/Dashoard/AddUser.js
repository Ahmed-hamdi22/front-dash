import{useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Axois } from '../../Api/Axois';
import Loading from '../../Auth/Loading';
import { USER } from '../../Api/Api';


const AddUser = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [role, setRole] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setLoading] = useState(false);

  
   async function handelSubmit(e) {
    setLoading(true);
      e.preventDefault();
     try{
      const res = await Axois.post(`${USER}/add`,{
        name: name,
         email : email,
         password : password,
         role : role,
      });
      window.location.pathname ="/dashboard/user";

     }catch(err){
      setLoading(false)
      console.log(err)
     }

    }
  return (
    <Form onSubmit={handelSubmit}className='b-white w-100'>
    { loading && <Loading/>}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
        value={name}
        required
        onChange={(e)=> setname(e.target.value)}
        type="text" placeholder="name.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        type="email" placeholder="eamil.." />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>password</Form.Label>
        <Form.Control
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        type="password" placeholder="password.." />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>role</Form.Label>
        <Form.Select
        value={role}
        onChange={(e)=>setRole(e.target.value)}
      >
        <option  disabled value={""}>Select Role</option>
        <option value="1995">Admin</option>
        <option value="2001">USER</option>
        <option value="1996">Writer</option>
      </Form.Select>
        <button 
        disabled={name.length > 1 &&
             email.length > 1 && 
             password.length > 6 && 
             role !== "" 
             ? false : true}
        className='button btn-primary user-btn '>
            save</button>
      </Form.Group>
      
    </Form>
  )
}


export default AddUser