
import sapatBG2 from "../assets/works/sapatBG2.jpg"


export const HeroPage=()=>{

    return (
        <div className="hero relative font-poppins">
            <div className="navBar absolute flex justify-between items-center w-full px-4 text-white">
               
                <div className="logo text-3xl font-bold sm:text-primary px-5 py-2">
                    SAPAT
                </div>

                <div className="hamburger sm:hidden space-y-2 w-[40px]">
                    <div className="h-[2px]  bg-white border-none"></div>
                    <div className="h-[2px]  bg-white border-none"></div>
                    <div className="h-[2px]  bg-white border-none"></div>
                </div> 

                <div className="hidden sm:flex sm:items-center ">
                <ul className="flex text-primary px-4 text-base space-x-16">
                    <li>About</li>
                    <li>Works</li>
                    <li>Contact</li>                    
                </ul>   
                <div className="socials">
                    <button className="bg-primary text-white rounded-sm py-1 px-2">Socials</button>
                </div>  
                </div>
            </div>

            <div className="imgWrapper">
               {/* <div className="h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat hidden sm:block md:hidden"style={{backgroundImage:`url(${sapatBG})`}}></div> */}
               <div className="h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat sm:hidden"
                style={{backgroundImage:`url(${sapatBG2})`}}></div>
            </div>
        </div>
    )
}