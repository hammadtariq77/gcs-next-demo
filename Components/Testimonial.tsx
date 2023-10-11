import React from "react";
type test = {
  img: string;
  heading: string;
  name: string;
  post: string;
};

const Testimonial = (props: test) => {
  return (
    <>
      <div className="w-72 mx-auto ">
        <img
          className="rounded-full border-[9px]  mx-auto relative top-12 "
          src={props.img}
          alt={props.name}
        />
        <div className="bg-gray-300 px-3 pt-16 pb-5">
          <h1 className="font-medium text-sm text-center leading-relaxed tracking-wide capitalize">
            <span className="font-bold text-orange-600 text-lg mr-2">
              &#10077;
            </span>
            {props.heading}
            <span className="font-bold text-orange-600 text-lg  ml-2">
              &#10078;
            </span>
          </h1>
          <div className="flex space-x-3 items-center justify-center pt-2">
            <h1 className="text-lg font-bold text-orange-600 capitalize">
              {props.name}
            </h1>
            <span className="text-sm font-medium capitalize">{props.post}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
