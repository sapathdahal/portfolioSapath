

export const Contact = () => {
  return (
    <div className="contact font-poppins py-12 px-5">
      <div className="w-[90%] mx-auto">

        <div className="text-center py-12 space-y-5">
          <h1 className="text-3xl">Contact Me</h1>
          <p className="text-sm">I am open to any kind of collaboration or work related to graphics designing.</p>
        </div>

     <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">

      <div className="order-2 bg-white shadow-xl py-6">
        <div className="py-5 text-center">
          <h1 className="text-xl">
            Reach me through this form
          </h1>
        </div>
        <form action="" className="flex flex-col w-[90%] md:w-[80%] mx-auto">
            <input type="text" className="px-3 py-6 border-b border-black outline-none focus:border-b-[#bca455]" placeholder='Enter your name' />
            <input type="text" className="px-3 py-6 border-b border-black outline-none focus:border-b-[#bca455]" placeholder='Enter your email' />
            <input type="text" className="px-3 py-6 border-b border-black outline-none focus:border-b-[#bca455]" placeholder='Purpose of message' />
            <input type="text" className="px-3 py-6 border-b border-black outline-none focus:border-b-[#bca455]" placeholder='Enter your message' />
            <div className="self-center mt-6">
            <button type="submit" className="bg-[#252525] w-fit  text-white px-6 py-2 rounded-sm border-none hover:scale-[1.1] hover:bg-[#bca455] hover:text-white transition-all">Submit</button>
            </div>
        </form>
      </div>


        <div className="bg-[#353535] order-1 py-6 ">
          
          <div className="py-5 text-center text-white">
            <h1 className="text-xl">Get in touch</h1>
          </div>
        <div className=" space-y-4 w-[90%] md:w-[60%] text-lg mx-auto">

            <div className=" bg-white px-3 py-6 shadow-xl rounded-md space-x-2 hover:bg-[#ede2bf] ">
              <button>Phone:</button>
              <span className="text-sm opacity-[0.7]">+977 9812345678</span>
            </div>
            <div className="bg-white px-3 py-6 shadow-xl rounded-md space-x-2 hover:bg-[#ede2bf]">
              <button>Address:</button>
              <span className="text-sm opacity-[0.7]">Lalitpur, Nepal</span>
            </div>
            <div className="bg-white px-3 py-6 shadow-xl rounded-md space-x-2 hover:bg-[#ede2bf]">
              <button>Email:</button>
              <span className="text-sm opacity-[0.7]">sapathdahal@gmail.com</span>
            </div>
        </div>
           <div>
            <div className="socials">

            </div>
           </div>
        </div>

      </div>
    </div>
  </div>
  )
}
