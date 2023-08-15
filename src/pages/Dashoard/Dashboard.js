import React from 'react'
import Topbar from '../../commponent/dashboard/Topbar'
import Sidebar from '../../commponent/dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <div className='postion-relative dashboard'>
     <Topbar/>
   <div 
   className=' d-flex  gap-1'
   style={{
    marginTop: "70px"
   }}>
   <Sidebar/>
     <Outlet/>
   </div>
     </div>
  )
}

export default Dashboard