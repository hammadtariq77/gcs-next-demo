"use client"
import axios from 'axios'
import React,{useState} from 'react'
interface dataa{
    title:string,
    price:string,
    desc:string

}
const page = async ({params}:any) => {
  
    const {id}=params
    const response=await axios.get(`https://dummyjson.com/products/${id}`)
    const data=await  response.data 
   
    console.log(data)
  return (
    <div className='bg-yellow-300 px-4 py-4 text-center w-72'>
        
        <h1>{data.title}</h1>
        <h1>{data.price}</h1>
        <h1>{data.description}</h1>
    </div>
  )
}

export default page