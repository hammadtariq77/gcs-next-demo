import React from "react";

import { Card } from "@/Components/Card";


const services = () => {
  return (
    <>
      <div className=" bg-cyan-900 text-center pt-10 ">
        <h1 className="text-5xl text-white font-bold uppercase">our team</h1>
        <div className="grid grid-cols-3  place-items-center h-[90vh] w-screen ">

          <Card title="hun des" desc="haider guard" img={"https://placehold.co/250x250/black/white"} />
          <Card title="tito party" desc="helooooooo" img={"https://placehold.co/250x250/yellow/white"} />

          <Card  title="my name" desc="black top" img={"https://placehold.co/250x250/red/white"} />
        </div>
      </div>
    </>
  );
};
export default services;
