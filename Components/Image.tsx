"use client";
import React, { useState } from "react";
import axios from "axios";

interface IPhoto {
  id: number;
  download_url: string;
  author: string;
}

const Tryagain = () => {
  const [images, setImages] = useState<IPhoto[]|undefined>();
  const onHandleClick = async () => {
    try {
      const result = await axios.get("https://picsum.photos/v2/list")
      .then((response)=>response.data)
      .catch((error)=>console.log(error));


      // const result = result.data;
      setImages(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <button className="btn btn-accent" onClick={onHandleClick}>
        click me
      </button>
      <div className="grid grid-cols-3 gap-4 px-5 text-center py-4">
        {images?.map((e) => {
          return (
            <div key={e.id} className="space-y-3">
              <img
                className="h-[250px] w-full rounded-md "
                src={e.download_url}
                alt={e.author}
              />
              <h1 className="font-bold text-white">writter : {e.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tryagain;
