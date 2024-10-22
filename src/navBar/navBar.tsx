// import { useNavigate } from "react-router-dom"

// import { Link } from "react-router-dom"
import { useState } from 'react'
import logo from '../assets/works/logomineee copy.png'

export const NavBar = () => {

  const [sidebarPosition, setSidebarPosition] = useState<boolean>(false)
 console.log(sidebarPosition)
      // const navigate = useNavigate();
  return (
    <div className="fixed w-full  z-10 backdrop-blur-xl border-b border-b-gray-300 font-poppins">
      
      <div className="w-[80%] mx-auto flex justify-between items-center py-2 px-3">
        
        <div className="logo order-2">
          <a href="#home"><img src={logo} className=" cursor-pointer w-16" alt="" /></a> 
         </div>
        
        <div className="hamburger  md:hidden order-1 cursor-pointer" onClick={()=>setSidebarPosition(true)}>
            <div className="bg-primary h-[1.5px] my-2 w-[35px]"></div>
            <div className="bg-primary h-[1.5px] my-2 w-[35px]"></div>
            <div className="bg-primary h-[1.5px] my-2 w-[35px]"></div>
        </div>
     
        <div className="routes items-center flex order-3">
        <ul className="links text-primary hidden md:flex space-x-5 px-5 ">     

           <li><a href="#about">ABOUT</a></li>
           <li><a href="#works">WORKS</a></li>
           <li><a href="#contact">CONTACT</a></li>
        </ul>

        <div className="socials">
        <button className="bg-primary text-white rounded-sm py-1 px-2">Socials</button>
        </div>
        </div>

        </div>
        
          <div className={`z-10 fixed top-0 h-screen bg-white ${sidebarPosition ? '-left-0' : '-left-full'} bg-white w-[55%] max-w-[350px] md:hidden transition-all duration-500 ease-linear overflow-hidden`}>
           <div className='w-[80%] bg-white mx-auto text-center'>
            <div className="cross text-right" onClick={()=>setSidebarPosition(false)}>
              <button className='px-4 py-1 my-4 bg-[#353535] text-white '>{'<--'}</button>
            </div>
             <ul className='sm:text-2xl space-y-5 py-5 px-5'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#contact">Contact</a></li>
             </ul>
             </div>
          </div>

    </div>

  )
}
