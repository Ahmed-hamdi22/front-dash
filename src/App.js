import React from 'react'
import Homepage from './pages/website/Homepage'
import { Route, Routes } from 'react-router-dom'
import Longin from './Auth/Longin'
import Register from './Auth/Register'
import Users from "../src/commponent/dashboard/Users"
import "./Css/commponent/button.css"
import GooglecallBack from './Auth/GooglecallBack'
import Dashboard from './pages/Dashoard/Dashboard'
import RequireAuth from './Auth/RequireAuth'
import User from './pages/Dashoard/User'
import AddUser from './pages/Dashoard/AddUser'
// import Err403 from './Auth/403'
import Wirter from './pages/Dashoard/Wirter'
import Err404 from './Auth/Err404'
import Requireback from './Auth/Requireback'
const App = () => {
  return (
    <div>
      <Routes>
        {/* public route */}
        <Route path ='/' element={<Homepage/>} />
        <Route element={<Requireback/>}>
        <Route path='/login' element={<Longin/>}/>
        <Route path='/register' element={<Register/>}/>
        </Route>
          <Route path='/auth/google/callback' element={<GooglecallBack/>}/>
          <Route path='/*' element={<Err404/>}/>
          {/* protected route */}
          <Route element={<RequireAuth allowedRole={["1996","1995"]} />}>
          <Route path ='/dashboard' element={<Dashboard/>}>
            <Route element={<RequireAuth allowedRole={["1995"]} />}>
            <Route path ='user' element={<Users/>}/>
          <Route path ='user/:id' element={<User/>}/>
          <Route path ='users/add' element={<AddUser/>}/>
          </Route>

          <Route element={<RequireAuth allowedRole={["1996","1995"]} />}>
          <Route path ='wirter' element={<Wirter/>}/>
          </Route>

          </Route>
          </Route>
        
      </Routes>

    </div>
  )
}

export default App
