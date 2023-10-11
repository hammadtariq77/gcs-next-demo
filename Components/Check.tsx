"use client"
import React,{useState} from 'react'

const Check = () => {
    const [count, setCount] = useState(0)
    
  return (
    <div className='text-center h-60 items-center flex  justify-center'>
        
        <button className='px-3 py-1 text-2xl mx-4 rounded-xl bg-white' onClick={()=>{
            setCount(count+1)
        }} >+</button >
        <h1 className='text-2xl font-bold mx-4'>{count}</h1>
        <button className='btn btn-secondary' onClick={()=>{
            setCount(count-1)
        }} >-</button >
        
        
        

    </div>
  )
}

export default Check