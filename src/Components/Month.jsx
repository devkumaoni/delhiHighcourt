import React, { useContext, useEffect } from 'react'
import { useYear } from '../Context/useYear'
import {useMonth} from "../Context/useMonth";
import './Month.css'

export default function Month() {
  const [year] = useContext(useYear);
  const [month, setMonth] = useContext(useMonth);
  useEffect(()=>{},[year])
  return (
    <div>
      
  

      {/* <h2>Month{month? (month): ("")}</h2> */}
      {year ? (<>
      <div className="months">
        <div className='btns' onClick={(e)=>setMonth(1)}>January</div>
        <div className='btns' onClick={(e)=>setMonth(2)}>Febuary</div>
        <div className='btns' onClick={(e)=>setMonth(3)}>March</div>
        <div className='btns' onClick={(e)=>setMonth(4)}>April</div>
        <div className='btns' onClick={(e)=>setMonth(5)}>May</div>
        <div className='btns' onClick={(e)=>setMonth(6)}>June</div>
        <div className='btns' onClick={(e)=>setMonth(7)}>July</div>
        <div className='btns' onClick={(e)=>setMonth(8)}>August</div>
        <div className='btns' onClick={(e)=>setMonth(8)}>September</div>
        <div className='btns' onClick={(e)=>setMonth(8)}>October</div>
        <div className='btns' onClick={(e)=>setMonth(8)}>November</div>
        <div className='btns' onClick={(e)=>setMonth(8)}>December</div>
        </div>
              </>) : (<div>Select the Year</div>)}
    </div>
  )
}
