import React from "react";
const footer=()=>{
    return(
        <>
          <div className="grid grid-cols-5 bg-slate-900 uppercase text-white justify-center text-center items-center h-[44vh] w-screen">
            <div className="  ">
                <ul className="space-y-2 ">
                    
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>services</li>
                </ul>
            </div>
            <div  className=" col-span-2 capitalize space-y-1">
                <p>Lorem ipsum dolor sit amet consectetur aicing.</p>
                <p>Lorem ip amet consecadipisicing.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet r adipisicing.</p>
                <p>Lorem ipsum dolor  r adipisicing.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div  className=" ">
                <ul className="space-y-3 ">
                    <li className="border-2 py-1">instagram</li>
                    <li className="border-2 py-1">facebook</li>
                    <li className="border-2 py-1">linekdin</li>
                    <li className="border-2 py-1">twitter</li>
                </ul>
            </div>
            <div  className="">
            <ul className="space-y-2 "> 
                    
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>services</li>
                    </ul>
            </div>
          </div>
          <footer className="bg-black text-white py-2 text-center">
            copyright reserved
          </footer>
        </>
    )
}
export default footer