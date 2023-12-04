import React from 'react'

export default function Card(props) {
  return (
    <div className="md:w-[17vw] w-[80vw] h-[40vh] md:h-[17vw] bg-white rounded-bl-[10px] md:shadow-lg rounded-br-[10px] shadow">
        <div className="img">
            <img src={props.Image} className='w-full md:h-[15vh] h-[20vh]' alt="" />
        </div>
        <div className="cont">
            <div className="flex max-sm:font-semibold font-medium  md:font-semibold font-[Poppins] md:text-[1vw]  text-[5vw] max-sm:text-[3vw] justify-center">
            {props.Title}
            </div>
            <div className="text-center md:mt-0 mt-[5vw] font-Poppins font-normal md:p-[1vw] px-[9vw] text-[3.5vw] md:text-[0.8vw]">
  {props.Content}
</div>

        </div>
    </div>
  )
}
