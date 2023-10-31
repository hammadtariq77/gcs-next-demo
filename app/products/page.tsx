"use client"
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
interface data{
    id:number,
    title:string,
    brand:string,
    price:string,
    desc:string

}


const page = () => {
    const [products, setProducts] = useState<data[]>([])
   useEffect(() => {
     
    const getProducts=async ()=>{
        const response=await axios.get("https://dummyjson.com/products")
        const data=await response.data
        const result=data.products
        
        setProducts(result)

    }
    getProducts()
    
   }, [])
   
  return (
    <div className='grid grid-cols-5 gap-8 px-5 py-3 justify-center items-center'>
        {
            products.map((e)=>(
                <div key={e.id} className='bg-red-300 space-y-1 text-black px-2 py-4 text-center'>
                    <h1 className='font-semibold  py-1 '>{e.title}</h1>
                    <h1>{e.brand}</h1>
            
                    <h1>{e.price}</h1>
                    <Link className='bg-green-300 px-2 py-1 rounded-md' href={`/products/${e.id}`}> buy now</Link>
                </div>

            ))
        }
    </div>
  )
}

export default page