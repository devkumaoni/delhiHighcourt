import React from 'react'
import Files from "../Files";
import Sidebar from "../Sidebar";
import Year from "../Year";
import Month from "../Month"
import './Home.css'

export const Home = () => {
  return (
<div className="container">
  

 
    {/* <Sidebar className='sidebar'/> */}
    <div className="content-div"><h2>Year</h2>
   
    <Year className='year'/><h2>Month</h2> 
    <div>
    <Month className="month" /></div>
    </div>

    {/* <main> */}
    <Files className='files' />
  {/* </main> */}
  
</div>  )
}
