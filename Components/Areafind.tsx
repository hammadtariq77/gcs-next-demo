"use client"
import React, { useRef, useEffect, useState } from 'react';

const Areafind = () => {
    const container = useRef<HTMLDivElement>(null);
    const [divWidth, setDivWidth] = useState<number>(0);
    const [divHeight, setDivHeight] = useState<number>(0);
    const [area, setarea] = useState<number>(0);

    const calculateTotalArea = () => {
        if (container.current) {
            setarea(container.current.clientWidth * container.current.clientHeight);
            console.log(area + ' px');
        }
    };

    useEffect(() => {
        calculateTotalArea(); 

        const handleResize = () => {
            if (container.current) {
                setDivWidth(container.current.clientWidth);
                setDivHeight(container.current.clientHeight);
                calculateTotalArea();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [container.current]);

    return (
        <div ref={container} className='h-[90vh] w-[90vw] bg-slate-900 mx-auto '>
            {/* Render your content here */}
            <p>Div Width: {divWidth}px</p>
            <p>Div Height: {divHeight}px</p>
            <p>Div Area : {area}px</p>
        </div>
    );
};

export default Areafind;
