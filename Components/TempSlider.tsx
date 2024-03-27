"use client"
import React, { useState } from 'react';

const TempSlider = () => {
  const [celcius, setCelcius] = useState<number>(0);
  const [faren, setFaren] = useState<number>(32); // Initialize Fahrenheit to 32

  const handleCelciusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCelcius = Number(e.target.value);
    setCelcius(newCelcius);
    const newFren = (newCelcius * 9) / 5 + 32; // Convert Celsius to Fahrenheit
    setFaren(Number(newFren)); 
  };

  const handleFarenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFren = Number(e.target.value);
    setFaren(newFren);
    const newCelcius = ((newFren - 32) * 5) / 9; // Convert Fahrenheit to Celsius
    setCelcius(Number(newCelcius)); 
  };

  return (
    <div>
      <h1>Celcius</h1>
      <input type="range" min={0} max={100} value={celcius} onChange={handleCelciusChange} />

      <h1>{celcius.toFixed(0)}</h1>
      <h1>Farhenite</h1>
      <input type="range" min={32} max={212} value={faren} onChange={handleFarenChange} />
      <h1>{faren.toFixed(0)}</h1>
    </div>
  );
};

export default TempSlider;
