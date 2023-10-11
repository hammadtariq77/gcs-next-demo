"use client"
import React, { useState } from "react";

interface IProduct {
  name: string;
  image: string;
  price: number;
}

const Learntype = () => {
  const initialProducts: IProduct[] = [
    { name: "keyboard",
     image: "https://placehold.co/200x200",
      price: 200 },
    {
      name: "headphones",
      image: "https://placehold.co/200x200",
      price: 300,
    },
    {
      name: "mouse",
      image: "https://placehold.co/200x200",
      price: 100,
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  return (
    <div className="flex justify-around text-center py-6">
      {products.map((product) => {
        return (
          <div className="space-y-4 font-bold text-xl text-red-800 ">
            <div>
              <h3> {product.name}</h3>
            </div>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>price ${product.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Learntype;
