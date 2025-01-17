import React from 'react'
import Dashboard from './pages/Dashboard'
import Header from './pages/Header'
import SideNav from './pages/sidenav'
import Table from './pages/Table'
import { Outlet } from 'react-router'
import './Outlet.css'
function Layout() {
  return (
    <div>
        
      
      <div className='container'>
        <div className='sidenav'>
      <SideNav ></SideNav>
      </div>
      <div className='layout'>
      <Outlet ></Outlet>
      </div>
      
      </div>
     
    </div>
  )
}

export default Layout
