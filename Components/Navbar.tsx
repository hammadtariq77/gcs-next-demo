import React from "react";

import Link from "next/link";
const home=()=>{
    return(
        <>
           <div className="bg-zinc-800 uppercase  text-white px-8 font-bold flex justify-between py-5 items-center">
            <div>
                <h1 className="text-xl">logo</h1>
            </div>
            <div className="space-x-8 tracking-wide">
              
               <Link href='http://localhost:3000/'>home</Link>
                <Link href="/About">about</Link>
                <Link href="/Services">service</Link>
                <Link href="/Contact">contact</Link>
            </div>
            </div> 
        </>
    )
}
export default home