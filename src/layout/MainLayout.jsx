import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router'

const MainLayout = () => {

  const {pathname}  = useLocation()

  
  return (
    <div className='w-full h-screen'>
    {!pathname== "/artist-dashboard" && <NavBar/>}
        <Outlet/>
    </div>
  )
}

export default MainLayout