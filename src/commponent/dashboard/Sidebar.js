import React, { useContext, useEffect, useState } from 'react'
import "./bars.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu } from '../../Context/MenuContext'
import WindowContext, { WindowSize } from '../../Context/WindowContext'
import { USER } from '../../Api/Api'
import { Axois } from '../../Api/Axois'
import { links } from './Navlink'
const Sidebar = () => {
  const menu = useContext(Menu);
  const WindowContext =useContext(WindowSize);
  const  windowSize =WindowContext.windowSize;
    // console.log(windowSize)
  const isopen = menu.isopen;

    // user
    const [user , setuser]= useState("");
    console.log(user)
    const Navigate = useNavigate();
    useEffect(() => {
    Axois.get(`/${USER}`)
    .then((data)=> setuser(data.data))
    // .then((data)=> console.log(data))
    .catch(()=> Navigate('/login',{replace:true}))
    }, [])
  return (
      <>
      <div style={{position:"fixed",
       top:"70px",
       left:"0",
        width:"100%",
       height:"100vh",
    backgroundColor:"rgba(0,0,0,0.2)",
    display:windowSize < '768'  && isopen? "block":"none", }}>
        </div>

    <div className='Sidebar pt-3'
     style={{
      left:windowSize < "768"? (isopen ? 0 : "-100%") :0,
      width:isopen ? '240px' :"fit-content",
      position:windowSize< '768'? "fixed": 'sticky'
      }}>

  
    {links.map((link, key)=>
   link.role.includes(user.role)&&(
  <NavLink
  key={key}
  to={link.path}
  className="d-flex  text-decoration-none align-items-center gap-2">
  <FontAwesomeIcon 
  style={{padding:isopen ?"10px 8px 10px 15px" :"10px 4px" }}
 icon={link.icon}
  />
    <p className='m-0' style={{
      display:isopen ? 'block':'none',
    }}> {link.name}</p>

  </NavLink>
  
    ))}
   
     
    </div>
    </>
   
  )
}

export default Sidebar