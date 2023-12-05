import React from 'react'
import Logo from './QuixLogo.png'
import Menu from './menu.svg'
import Close from './cross.svg'
import { useState } from 'react'
export default function NavBar() {
    const [Icon , setIcon] = useState(Menu)
    const [NavState , setNavState] = useState(false)
    
    function MenuView(){
        setIcon((Icon === Menu)? Close : Menu)
        setNavState((Icon === Menu)? true : false)
    }
  return (
    
    <div className="md:h-[20vh] h-[10vh]">
        <style>@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=MonteCarlo&family=Poppins:wght@400&display=swap');</style>
        <div className="flex justify-between mt-5 mr-3 md:mt-0">
            <div className="w-[15vw] md:w-[10vw]">
                <img src={Logo} alt="" />
            </div>
            <div className="hidden md:inline md:self-center">
                <ul className='md:flex font-[Poppins] text-[1.3vw]'>
                    <li>count 3</li>
                    <li className='px-[1.5vw]'>About</li>
                    <li className='px-[1.5vw]'>Services</li>
                    <li className='px-[1.5vw]'>Testimonials</li>
                    <li className='px-[1.5vw]'>Contact Us</li>
                    <li className='px-[1.5vw]'><button className='bg-black text-white p-1.5 rounded-md'>Get Started</button></li>
                </ul>
            </div>{/*Navlinks for Desktop */}
            <div className="md:hidden">
                <button onClick={MenuView}><img id="Menu" src={Icon} alt="" /></button>
            </div> {/* Menu Button for mobiles */}
        </div>
        <div className="body-content">
            <ul className={`${NavState?"":"hidden"} box `} id="mobile-nav">
            <li>count 3</li>
                <li>About</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
                <li><button className='bg-black text-white p-1.5 rounded-md'>Get Started</button></li>
            </ul>
        </div>
    </div>
  )
}