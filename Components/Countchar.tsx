"use client"
import React,{useState} from 'react'
const Countchar = () => {
    const [count, setCount] = useState("")
    function countchar(e:any){
        setCount(e.target.value)
        
    }
    const length=count.length
  return (
    <div className='my-20 mx-40'>
        <input type="text"
        className=' border-2 border-black h-10 w-60' 
        value={count}
        onChange={countchar}/>
        <h1>{length}</h1>
    </div>
  )
}

export default Countchar