import React from 'react'
import Card from './Card/Card'
export default function Features() {
  return (
    <div className="flex flex-col items-center md:mt-[4rem] justify-center mt-[2rem]">{/*<Root>*/}

    <div className="font-rock-salt flex justify-center relative md:text-[2.5vw] md:mt-[2vh] md:h-[7vw] mt-[4vh] text-[4vw]">Features</div>
    <div className="grid items-center md:gap-x-[12vh] gap-x-[50%] mt-10 md:mt-0 text-center overflow-x-auto md:overflow-y-hidden md:gap-y-0 gap-y-[4vh] justify-items-center grid-cols-1 md:grid-cols-5 md:w-[90%]  md:h-[30em] h-[200vh] ">
        
    <Card frontText="User-Centered Design" backText="crafting intuitive experiences around your users."/>
    <Card frontText="Tailored Visuals for Your Brand" backText="Visuals that reflect your brand's unique identity."/>
    <Card frontText="Dedicated Support" backText="Support that's as dedicated to your success as you are."/>
    <Card frontText="Quality Assurance" backText="Ensuring excellence in every pixel and line of code."/>
    <Card frontText="Timely Delivery" backText="Delivering on time, every time, without compromise."/>
    
    </div>


    {/*<---/Root>*/}</div>
  )
}
// w 234 
// h 329