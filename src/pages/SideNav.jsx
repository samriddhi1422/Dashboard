import React from 'react'
import './SideNav.css'
import { MdSpaceDashboard } from "react-icons/md";
import { FaTable } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa6";
import { Link, NavLink } from 'react-router';
function SideNav() {
  return (
    <div className='sidebar'>
     <div className='head'>
        Soft UI Dashboard3
     </div>
     <hr/>
     <div className='menu'>
        <ul>
            <li> <MdSpaceDashboard size={20}/>
            
            <NavLink to="/" style={{ textDecoration: 'none',color:'#27272a'}}>Dashboard</NavLink>
            </li>
            <li> <FaTable size={20} />
            <NavLink to="/table" style={{ textDecoration: 'none',color:'#27272a'}}>Table</NavLink>
            </li>
            <li> <FaMoneyBillWave size={20}/>Billing</li>
            <li><FaCube size={20} />Virtual </li>
            <li> <LuSettings2 size={20}/>RTL</li>
        </ul>
     </div>
    
    </div>
  )
}

export default SideNav
