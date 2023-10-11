import React from 'react'
import Timetable from "@/Components/Timetable";

const Alldata = () => {
  return (
   <div>
     <div className='grid grid-cols-5 gap-5 px-4 py-10 text-white bg-emerald-600'>
        <Timetable name="BS cs G1" idd= {1} />
        <Timetable name="Bs Statistices" idd={2}/>
        <Timetable name="BS botany" idd={3}/>
        <Timetable name="BS chemistry" idd={4}/>
        <Timetable name="BS Math" idd={5}/>
    </div>
    
   </div>
  )
}

export default Alldata