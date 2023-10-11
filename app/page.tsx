
import React from "react";
import Services from "@/Components/Services";
import Hero from "@/Components/Hero";
import Alldata from "@/Components/Alldata";
import MyTable from "@/Components/MyTable";
import Countchar from "@/Components/Countchar";

const page = () => {
  return (
    <>
      
       
      <Countchar/>

      <Hero />    
      <Alldata/>
      <Services /> 
    </>
  );
};
export default page;
