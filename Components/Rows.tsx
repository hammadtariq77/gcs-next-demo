import React from 'react'
type rows={
    header?:string,

    

}
export const Rows = (props:rows) => {
  return (
    <div className='grid grid'>
       <h1> {props.header}</h1>
        </div>
  )
}
