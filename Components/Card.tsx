
import React from 'react'
type cardprop ={
    title:string,
    desc?:string,
    img:string

}

export const Card = (props:cardprop) => {
  return (
    <>
     <div className=" pb-10 w-64 text-center shadow-xl  space-y-2">
            <img className="mx-auto rounded-lg" src={props.img} alt="" />
              <h1 className="text-2xl font-bold text-white">{props.title}</h1>
              <p className="text-lg text-gray-200 leading-5 font-semibold">{props.desc}.</p>
            </div>
    </>
  )
}
