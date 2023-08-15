import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Menu} from '../../Context/MenuContext'
import { useEffect,useState } from 'react'
import { Axois } from '../../Api/Axois'
import { LOGOUT, USER } from '../../Api/Api'
import { useNavigate } from 'react-router-dom'
import { DropdownButton } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import Cookie from "cookie-universal"
const Topbar = () => {
const menu = useContext(Menu);
const  setisopen = menu.setisopen;
const  cookie = Cookie();
const [name, setname]= useState("");
// const [user , setuser]= useState("");
const Navigate = useNavigate();
useEffect(() => {
  Axois.get(`/${USER}`)
  .then((data)=> setname(data.data.name))
  .catch(()=> Navigate('/login',{replace:true}))
  }, []);
  async function handellogout() {
    try {
     const res = await Axois.get(`/${LOGOUT}` );
     cookie.remove("e-commerce")
     window.location.pathname = "/login";
      console.log(res);
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <div className='topbar '>
    <div className='  d-flex align-items-center justify-content-between h-100 '>
      <div  className=' d-flex align-items-center gap-3 '>
    <h3>E-commerce</h3>
        <FontAwesomeIcon 
        onClick={()=>setisopen((prev)=>!prev)}
        cursor={"pointer"}icon={faBars} />
    </div>
    <div>
    <DropdownButton id="dropdown-basic-button" title={name}>
      <Dropdown.Item onClick={handellogout}>Log out</Dropdown.Item>
  </DropdownButton>
    </div>
   
    </div>
    </div>
  )
}

export default Topbar