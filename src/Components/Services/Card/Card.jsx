import React from 'react'

export default function Card(props) {
  return (
    <div className="md:w-[17vw] w-[80vw] h-[40vh] md:h-[17vw] rounded-bl-[10px] md:shadow-lg rounded-br-[10px] shadow">
        <div className="">
            <img src={props.Image} className='relative w-full md:h-[50%] h-[20vh]' alt="" />
        </div>
        <div className="cont">
            <div className="flex relative mt-[2%]  font-medium  md:font-semibold font-[Poppins] md:text-[1vw]  text-[120%] justify-center">
            {props.Title}
            </div>
            <div className="relative text-center md:mt-0  font-Poppins font-normal md:p-[1vw] px-[9vw] text-[100%] md:text-[0.8vw]">
  {props.Content}
</div>

        </div>
    </div>
  )
}
