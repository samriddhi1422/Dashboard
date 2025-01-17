import React from 'react'
import Chart from './chart'
import './Dashboard.css' 
import BarChart from './BarChart'

function Dashboard() {
  return (
    <>
    <div className='head'>
         <h2>Dashboard</h2>
    </div>
   
    <div className='dash'>   
      <div  className='lineChart'>
  <Chart></Chart>
    </div>
    <div className='bar-chart'> 
      <BarChart ></BarChart>
    </div>
    </div>
    </>
  )
}

export default Dashboard
