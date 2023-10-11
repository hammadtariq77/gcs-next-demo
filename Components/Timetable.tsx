import React from 'react'

type slotprop={
  idd:number,
  name:String,

}

const Prop = (props:slotprop) => {
  
  return (
    <div className='uppercase text-xl font-bold'>
     <h1>   {props.idd}  :  {props.name}</h1>
     
      </div>
  )
}

export default Prop