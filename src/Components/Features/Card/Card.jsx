import React, { useState } from 'react';

export default function Card(props) {
  

  return (
    <div className="group w-[13em] md:w-[200px] md:h-[70%] h-[100%]">
      <div className={`relative h-full w-full border-2  group-hover:[transform:rotateY(180deg)] duration-500 [transform-style:preserve-3d] `}>
      <div className="absolute inset-0 w-full h-full text-white bg-black [transform:rotateY(180deg)] flex justify-center items-center px-[12%] shadow-md shadow-slate-500 font-[Poppins]">{props.backText}</div>
      <div className="absolute font-[Poppins] px-[12%] w-full inset-0 h-full bg-white [backface-visibility:hidden] flex justify-center items-center shadow-md shadow-black">{props.frontText}</div>
    </div>
    </div>
  );
}
