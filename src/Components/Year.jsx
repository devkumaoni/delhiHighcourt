import React, { useContext, useState } from 'react'
import { useYear } from '../Context/useYear'
import './Year.css'

export default function Year() {
  const [year,setYear] = useContext(useYear);
  function handleYear(e){
setYear(e.target.innerHTML)
  }

  return (
    
  <div className='year'>
      <div className='years'>
  
      {/* <h2>Year {year ? year : ("")}</h2>  */}

      <div className="Btns">
     
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2012}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2013}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2014}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2015}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2016}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2017}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2018}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2019}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2020}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2021}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2022}</button>
      <button className='yearBtns' onClick={(e)=>handleYear(e)}>{2023}</button>
      </div>

      </div>
     
  </div>
 

 
  )
}
