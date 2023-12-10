import React from 'react'
import Card from './Card/Card'
import Image1 from './images/image1.png'
import Image2 from './images/image2.png'
import Image3 from './images/image3.png'
import Image4 from './images/image4.png'
import Image5 from './images/image5.png'
import Image6 from './images/image6.png'


export default function Services() {
  return (
    <div className="flex flex-col align-center md:mt-[4rem] md:h-[100%]">{/*<Services-root>*/}

    {/*<Services>*/}<div className="font-rock-salt flex justify-center relative md:text-[2.5vw] md:mt-[2vh] md:h-[7vw] mt-[4vh] text-[4vw]">Services</div>{/*<---/Services>*/}
    <div className="md:hidden h-[8vw]"></div>
    <div className='flex justify-center '>
        <div className="grid md:w-[80vw] place-items-center grid-cols-1 md:grid-cols-3 gap-y-[5vw] gap-x-[5vw]">{/*<Card-body>*/}
          
          <Card Image={Image1} Title="UI/UX Design" Content="Our UI/UX designs turn concepts into captivating experiences. Elevate user engagement and conversion rates with our user-centric approach."/>
          <Card Image={Image2} Title="Graphic Design" Content="From branding to visuals, we craft striking graphics that bring your brand to life and captivate your audience."/>
          <Card Image={Image3} Title="Digital Marketing" Content="Boost your online presence with our digital marketing strategies, tailored to enhance your ROI."/>
          <Card Image={Image4} Title="Content Writing" Content="Compelling content is at the heart of every successful campaign. Our skilled writers deliver content that tells your story and resonates with your audience."/>
          <Card Image={Image5} Title="3D Models" Content="Experience innovation with our 3D models. Whether it's product design, architectural visualization, or prototyping, we bring your ideas to life."/>
          <Card Image={Image6} Title="AR/VR Projects" Content="Immerse your audience with our AR/VR projects. Explore a world where creativity knows no bounds."/>
          
        </div>{/*<---/Card-body>*/}
        </div>
        
    {/*<---/Services-root>*/}</div>
  )
}
