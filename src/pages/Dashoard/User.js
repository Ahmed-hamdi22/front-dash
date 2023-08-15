import{useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Axois } from '../../Api/Axois';
import Loading from '../../Auth/Loading';
import { USER } from '../../Api/Api';
import { useNavigate } from 'react-router-dom';


const User = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [role, setRole] = useState("");
    const [disable, setdisable] = useState(true);
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    // ID
    const id  = Number(window.location.pathname.replace("/dashboard/user/",""));
    useEffect(() => {
      setLoading(true);
      Axois.get(`${USER}/${id}`).then((data)=>{
        setname(data.data.name);
        setemail(data.data.email);
        setRole(data.data.role);
        setLoading(false)
      }).then(()=>setdisable(false))
      .catch(()=> nav('/dashboard/user/page/404',{replace :true}))
    }, [])
    // handelSubmit
   async function handelSubmit(e) {
    setLoading(true);
      e.preventDefault();
     try{
      const res = await Axois.post(`${USER}/edit/${id}`,{
        name: name,
         email : email,
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
        {/* <button className='button btn-primary user-btn '
       
        disabled={disable}>save</button> */}
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
        <button className='button btn-primary user-btn '
       
        disabled={disable}>save</button>
      </Form.Group>
    </Form>
  )
}

export default User