import React, { useContext, useEffect, useState } from 'react'
import { useYear } from '../Context/useYear'
import { useMonth } from '../Context/useMonth';
import data from "../../data";
import './Files.css'

export default function Files() {
  const [year,setYear] = useContext(useYear);
  const [month, setMonth] = useContext(useMonth);
  const [file,setFile] = useState("");
  const [data2, setData2] = useState(null);
  useEffect(()=>{
    if(year && month)
    {
      setData2(data[Number(year)][Number(month)]);
    }
  },[year,month, data2])
  function handleFileClick(e){
    setYear(NaN);
    setMonth(NaN);
    setFile("");
    setData2(null)
  }

  return (
   
    <div className='files'>  <h2>Files</h2>
      <br/>
      <div className='content'>
      year: {year? year: "Select the year"}
      <br/>
      month: {month? month: "Select the month"}
  
   
   
    {data2? (data2.map((d,index)=>(
    <button  key={index} onClick={(e)=>setFile(d)}> {<a className='fileBtn' href ={file} >File</a>}</button>
      ))) :""}
 </div>

{/* {file && (<img src={} alt="FIle" style={{height:"100px", width: '100px'}}  />)} */}

  </div>
  )}
