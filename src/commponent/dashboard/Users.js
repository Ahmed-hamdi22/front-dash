import React from 'react'
import { useEffect , useState} from 'react'
import { USER, USERS, baseURl } from '../../Api/Api'
import axios from 'axios'
import Cookie from "cookie-universal"

import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Axois } from '../../Api/Axois'
const Users = () => {
const [users, setUsers] = useState([])
const [deleteUser, setDeleteUser] = useState(false)
const [CurrentUser, setCurrentUser] = useState("")
const [NoUser, setNoUser] = useState(false)
  const cookie = Cookie();
  // get curret user
  useEffect(() => {
    Axois.get(`${USER}`).then((res)=> setCurrentUser(res.data))
  }, [])

  // get All user
  useEffect(() => {
      axios.get(`${baseURl}/${USERS}`,{
        headers: {
          Authorization: "Bearer " + cookie.get("e-commerce"),
        },
      })
      .then((data) =>setUsers(data.data))
      .then(()=>setNoUser(true))
      .catch((err)=>console.log(err));
   
  }, [deleteUser])
// filter current user
  const userShow = users.map((user, key)=>
  <tr key={key}>
    <td>{key+1}</td>
    <td>{user.name === CurrentUser.name ? user.name + "(you)" : user.name}</td>
    <td>{user.email}</td>
    <td>{user.role  ==='1995'?  "Admin" : user.role === '2001'? 'user' :'wirter' }</td>
    
    
    <td >

      <div className='d-flex align-items-center gap-2'>
        <Link to={`${user.id}`}>
        <FontAwesomeIcon  icon={faPenToSquare} /></Link>
      {
        CurrentUser.name !== user.name &&(        <FontAwesomeIcon 
          onClick={()=> handelDelete(user.id)} 
          color='red' icon={faTrash}
          cursor={"pointer"} />)  }
          </div>
          </td>
  </tr>
  )
  async function handelDelete(id) {
    if(  CurrentUser.id !== id) {
    try{
      const res = await Axois.delete(`${USER}/${id}`)
      setDeleteUser((prev)=> !prev)
    }catch(err){
      console.log(err)
    }}
  }
  return (
    <div className='bg-white p-2 w-100'>
      <div className='d-flex align-items-center justify-content-between'>
   <h1>UsersPage</h1>
   <Link to ="/dashboard/users/add" className='btn btn-primary'>Add User</Link>
   </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
         
        </tr>
      </thead>
      <tbody>
       {users.length === 0? (
       <tr>
        <td colSpan={12}  className='text-center'>
             {""}
        Loading...
        </td> </tr>
       ): users.length === 0 && NoUser?(
       <tr>
        <td colSpan={12}
        className='text-center'
          >
            {""}
      No users found
        </td> </tr>
  ):(
    userShow
    )}
      </tbody>
    </Table>
  
    </div>
  )
}

export default Users
