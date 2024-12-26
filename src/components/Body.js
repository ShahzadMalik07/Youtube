import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <div className=''>
      <Head />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>

    </div>
  )
}

export default Body
