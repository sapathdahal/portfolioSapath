// import { useNavigate } from "react-router-dom"

// import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from 'react'
import logo from '../assets/personal/logomineee copy.png'

export const NavBar = () => {

  const [sidebarPosition, setSidebarPosition] = useState<boolean>(false)

  const [scrollDown, setScrollDown] = useState<boolean>(false)

    const lastScroll = useRef(0)

    const handleScroll = () =>{
      const currentScroll = window.scrollY;

      if(currentScroll > lastScroll.current){ //right now lastScroll is 0 as we havent given it the value of scrollY yet 
                                              //and so this if condition applies and runs
        setScrollDown(true)
        console.log('down' + currentScroll,lastScroll.current)
        
      }
      else{

         setScrollDown(false)
         console.log('up' + currentScroll,lastScroll.current)
      }
      lastScroll.current=currentScroll;
    }
     
    useEffect(()=>{
    window.addEventListener("scroll",handleScroll) 
  
    return ()=>{  
    window.removeEventListener("scroll",handleScroll) 
    }
    },[])

  return (
    <div className={`w-full relative font-poppins bg-red-300`}>
      
      <div className={`w-full fixed  transition-transform ease-linear duration-200 z-10 bg-[#f8f8f8] border-b border-b-gray-300 flex justify-around items-center py-2 ${scrollDown ? '-translate-y-[90px]':'translate-y-0'} `}>
        
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
