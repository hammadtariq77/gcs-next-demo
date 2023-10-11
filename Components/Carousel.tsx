import React from 'react'

const carousel = () => {
  return (
    <>
    <div className="carousel  w-full h-[60vh]  ">
  <div id="item1" className="carousel-item w-full ">
    <img src="https://images.unsplash.com/photo-1694554060925-c36fa7f9918d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" className="w-screen object-cover " />
  </div> 
  <div id="item2" className="carousel-item w-full ">
    <img src="https://images.unsplash.com/photo-1687753578675-9df7e1a4f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-screen object-cover  " />
  </div> 
  <div id="item3" className="carousel-item w-full ">
    <img src="https://images.unsplash.com/photo-1694376015496-140430f9bf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" className="w-screen object-cover " />
  </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  
</div>
    </>
  )
}

export default carousel