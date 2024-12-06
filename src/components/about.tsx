import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaLetterboxd } from "react-icons/fa6"


export const About = () => {
  return (
    <div className='about-me flex justify-center items-center font-poppins py-12 '>
     
      <div className="flex flex-col md:flex-row-reverse items-center w-[90%] py-6">
     
      {/* <div className="about-me-content">
        <div className="w-[75%]  bg-[#514A2E] text-white py-8 px-5 rounded-md space-y-5 mx-auto">
        <h1 className="font-bold text-4xl md:text-5xl">About Me</h1>
        <p className="text-sm">I am Sapath Dahal. I am an <span>Actuarial Student</span> currently studying at <span>Tribhuvan University</span>.
          Alongside my academic journey, I have a deep passion for <span>Graphic Design</span>.
          Whether I'm working on creative poster designs or exploring new ways to express my ideas visually, I bring dedication and 
          enthusiasm to every project. Balancing my studies and creative persuits allow me to approach challenges from a unique perspective.
          I'm always eager to <span>learn</span>, <span>gorw</span> and <span>expand</span> my horizons in both the fields.
        </p>
        <div className="buttons">
          <button className="bg-white text-black p-2 rounded-sm border-none hover:scale-[1.1] hover:bg-[#bca455] hover:text-white transition-all">My Resume</button>
        </div>
        </div>

      </div>

      <div className="my-images relative">
        <div className="image-list rounded-lg">
          <img src={profile1} className="hidden md:block xl:hidden my-2 w-[80%] md:mr-auto rounded-md" alt="" />
          <img src={profile2} className="hidden md:block w-[60%] mx-auto md:w-[80%] md:ml-auto md:mr-0 xl:mx-auto my-2 rounded-md" alt="" />

          <img src={profile3} className="md:hidden w-[90%] mx-auto my-2 rounded-md" alt="" />
          <img src={logo} className="md:hidden absolute top-5 left-5 w-1/3" alt="" />
       </div>
      </div> */}
       <div className="about-me-content">
        <div className="header text-center">
        <h1 className="text-4xl text-[#252525] py-12">About Me</h1>
        </div>
        <div className="w-[80%] bg-white py-8 px-5 rounded-md space-y-5 mx-auto">

        <p className="text-sm ">I am Sapath Dahal. I am an <span className="font-semibold">Actuarial Student</span> currently studying at <span className="text-[#a7a026e0] font-bold cursor-pointer">Tribhuvan University</span>.
          Alongside my academic journey, I have a deep passion for <span className="font-semibold">Graphic Design</span>.
          Whether I'm working on creative poster designs or exploring new ways to express my ideas visually, I bring dedication and 
          enthusiasm to every project. Balancing my studies and creative persuits allow me to approach challenges from a unique perspective.
          I'm always eager to learn, grow and expand my horizons in both the fields.
        </p>
        <p className="text-sm">
        As an Actuarial student, I enjoy applying analytical thinking and problem-solving skills to complex mathematical challenges, while my passion for graphic design allows me to tap into my creative side.
         The combination of these two disciplines helps me maintain a balanced and multifaceted approach to both my studies and creative projects. I believe this unique blend of analytical rigor and artistic 
         expression enables me to think outside the box, whether I am solving a mathematical problem or designing a visual concept. I'm always striving to learn more, seeking inspiration from various fields to enhance my abilities.
        </p>
        <div className="buttons space-x-5">
          <button className="bg-[#252525] text-white p-2 rounded-sm border-none hover:scale-[1.1] hover:bg-[#bca455] hover:text-white transition-all">My Resume</button>
          <a href="#contact"><button className="bg-white text-[#252525] border border-[#252525] p-2 rounded-sm  hover:scale-[1.1] hover:border-white hover:bg-[#bca455] hover:text-white transition-all">Contact Me</button></a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/sptdhl/"><FaLetterboxd size={25} color="black"/></a>
          <a href=""><FaInstagram  size={25} color="black"/></a>
          <a href="https://letterboxd.com/sapath/"><FaLinkedin   size={25} color="black"/></a>
          
        </div>
        </div>

      </div>

      </div>

    </div>
  )
}
