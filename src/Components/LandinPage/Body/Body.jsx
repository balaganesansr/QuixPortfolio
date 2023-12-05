import React from 'react'

export default function Body() {
    return (
        <div className=''>
            <div className='h-[30vh] md:h-[35vw]  md:flex md:flex-col  md:items-center md:justify-center'>
            <div className="md:w-[59vw] md:h-[20vw] text-center md:flex md:items-center md:justify-center text-black md:text-[3vw] font-rock-salt">  
            Let's Create Something<br /> <br/>  Amazing Together !
            </div>
            <div className="md:w-[48vw] md:h-[5vw] md:mt-[vw] mt-[3vw] text-center text-black md:text-[1.3vw] font-medium font-['Poppins']">
                Ready to embark on your design journey, <br className='md:hidden'/>Let's turn your vision into reality. <br/>Get started with us today.
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <button className="md:w-[21.5vw]  md:h-[80px] w-[38vw] h-[49px] bg-zinc-300 bg-opacity-10 rounded-[4vw] md:rounded-[2vw] shadow">Get Started</button>
                </div>
            </div>
        </div>
    )
}
