import React from 'react'
import "./Error403.css"
import { Link } from 'react-router-dom'
const Err403 = ({role}) => {
  return (
    <div className='text-wapper'>
      <div className='title' data-content={404}>
    403 -ACCESS DEBEND
      </div>
      <div  className='subtitle'>
        You don't have permission to access this page.
          <Link className='d-block text-center btn btn-primary'
           to={role === '1996' ? "/dashboard/wirter":"/"}>
          { role === '1996' ?"writer page":" go to  home page"}</Link>
      </div>
    </div>
  )
}

export default Err403
