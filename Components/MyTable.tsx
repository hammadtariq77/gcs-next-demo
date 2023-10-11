import React from "react";
type data = {
  slot: [];
  days: string[];
};

const MyTable = () => {
  const slot = [
    {
      id: 1,
      name: " 8 - 9",
    },
    {
      id: 2,
      name: " 9 - 10 ",
    },
    {
      id: 3,
      name: " 10 - 11",
    },
    {
      id: 4,
      name: " 11 - 12",
    },
    {
      id: 5,
      name: " 12 - 1:00",
    },
  ];
  const days = [
    {
      id: 1,
      name: "monday",
    },
    {
      id: 2,
      name: "tuesday",
    },
    {
      id: 3,
      name: "wednesday",
    },
    {
      id: 4,
      name: "thursday",
    },
    {
      id: 5,
      name: "friday",
    },
  ];

  return (
    <>
     
        
          <div className="flex">
          {slot.map((slot) => {
              return (
                <div>

                     <h1>{slot.name}</h1>

                </div>
                  
                   
                  
              );
            })}
          </div>
            
          
        
      
    </>
  );
};

export default MyTable;
