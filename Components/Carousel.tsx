"use client"
import { data } from 'autoprefixer'
import React,{useState,useEffect} from 'react'
const carousel = () => {

  const data=[
  {
    title:"we build your dreams ",
    imgg:"https://images.unsplash.com/photo-1697621666147-5e607c3c4a38?auto=format&fit=crop&q=80&w=1813&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title:"chullmul developer",
    imgg:"https://images.unsplash.com/photo-1697637592814-8e44a4ec089a?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title:"we are back  ",
    imgg:"https://images.unsplash.com/photo-1694250990115-ca7d9d991b24?auto=format&fit=crop&q=80&w=1895&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  ]

  const [slide, setSlide] = useState(0)
  useEffect(() => {
  
  const interval=setInterval(
    ()=>
    setSlide( (pre) => (pre===data.length-1 ? 0: pre + 1) )

  ,2000);
    return ()=> clearInterval(interval)
     
    }
   ,[])
  
  return (
    <>
<div className='h-[90vh] w-screen bg-cover bg-center relative bg-no-repeat overflow-x-hidden flex justify-center items-center ' style={{backgroundImage: `url(${data[slide].imgg})`}}  >
<div className='absolute z-20'>
    <h1 className='text-[8vw] font-bold text-black capitalize'>{data[slide].title}</h1>
  </div>

</div>
   </>
  )
}

export default carousel