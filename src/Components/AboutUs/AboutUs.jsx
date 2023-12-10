import React from 'react'
import Image1 from './image1.png'
import Image2 from './image2.png'
export default function AboutUs() {
  return (
    <div className='mt-[5vw] md:h md:flex'>{/*<AboutUS-root>*/}

{/*<image-Desktop>*/}<div className="hidden md:inline"><img src={Image1} alt="" className=' w-[40vw] relative md:h-full  ' /></div>{/*<---/image-Desktop>*/}
      <div className=" md:w-[70vw]">
        {/*<AboutUS>*/}<div className="md:text-black md:ml-[9vw] text-white md:text-[2.5vw] text-[4vw] pt-5 flex justify-start  font-normal bg-about-bg md:bg-none font-rock-salt">About Us</div>{/*<---/AboutUS>*/}
{/*<image-Mobile>*/}<div className="md:hidden mb-[5vw]"><img src={Image1} alt="" className='w-screen' /></div>{/*<---/image-Mobile>*/}
        <div className="flex items-center justify-center ">{/*<BoxAndText>*/}

          {/*<RoundedBox>*/}<div className="flex md:mt-[3vw] md:flex items-center md:justify-center   bg-inherit  w-[87vw] md:w-[65vw] md:h-[40vw] h-[60vw] rounded-tl-[100px] md:rounded-br-none rounded-br-[100px] md:rounded-tl-[343px] md:rounded-bl-[343px] border border-black">

            {/*<TextContents>*/}<div className="md:mx-0 font-normal mx-[9vw] md:text-left text-center md:ml-20">

              <span className='font-[Poppins] md:text-[3vw] text-[4vw] font-bold'>Quix </span><span className='md:text-[1.75vw] text-[2.5vw]' > was born from a dream to make the world more <br />
                innovative, Our journey is marked by creativity, dedication, <br />
                and the pursuit of excellence.We transform creative ideas <br />
                into captivating realities. Our design expertise knows no <br />
                bounds, and our commitment to innovation sets us apart. <br />
                Explore our world of design excellence and start your journey <br />
                to breathtaking visuals today.</span>

            </div>{/*<---/TextContents>*/}

          </div>{/*<---/RoundedBox>*/}

        </div>{/*<---/BoxAndText>*/}

      </div>

      {/*<---/AboutUS-root>*/}</div>
  )
}
// {/*<image>*/}<div className="mb-5 md:hidden"><img src={Image1} alt="" /></div>{/*<---/image>*/}