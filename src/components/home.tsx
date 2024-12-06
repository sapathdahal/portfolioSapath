
import bg from '../assets/personal/image.jpg'



export const Home = () => {
  return (
    <div className='home relative h-[100vh] font-poppins flex justify-center items-center'>

      <div className='w-[90%] flex flex-col space-y-5 items-center  mt-12'>
      <div className="info  p-3 text-center space-y-2 md:w-[60%]">
        <h1 className='text-base'>
          I Design and Deliver.
        </h1>
        <h1 className='font-bold text-3xl md:text-4xl'>Graphics Designer
          & Aspiring Acturary
        </h1>
        <p className='text-sm text-gray-600'>
          I am a mathematical science student majoring actuarial sciences.
          I am a graphic designer. I love merging texts with images.
        </p>
      
      </div>

      <div className="image  w-[80%] hover:scale-[1.01] cursor-pointer transition-all max-w-[400px]">
      <img src={bg} className='' alt="" />
      </div>

       {/*   <div className='info  flex flex-col justify-center items-center px-5'>

        <div className=' h-[50%] flex flex-col items-center md:items-start justify-center md:rounded-md p-5'>
            
            <div className="who-i-am bg-primary text-white px-3 py-1 text-base rounded-sm w-fit mb-2">
              <h1>I am Sapath and I design.</h1>
            </div>
            
            <div className='relative flex flex-col items-center text-center md:items-start md:text-left'>
            <div className="what-i-do font-bold mb-2">
            <h1 className='text-4xl md:text-6xl lg:text-7xl '>Graphic Designer</h1>
            <h2 className='text-3xl md:text-4xl lg:text-5xl '>& Aspiring Analyst </h2>
            </div>

            <div className="based-on text-lg text-primary">
                <h1>based in Lalitpur, Nepal.</h1>
            </div>
            </div>
        </div>
       
         </div>

        <div className="img-field md:my-auto md:justify-center px-5">
          <div className='md:bg-primary flex flex-col items-center rounded-md py-3'>
            <div className='w-[35%] md:w-[70%] mb-5'>
                <img src={bg} className='' alt="" />
            </div>
            <div className="need-buttons text-sm text-center w-[90%]">
                <button className="px-5 m-2 py-2 rounded-sm bg-primary text-white md:border md:border-white">My Designs</button>
                <button className="px-4 m-2 py-2 rounded-sm border border-primary md:bg-white">My Analytics</button>
            </div>
          </div>
          
        </div> 
        */}

        </div>

    </div>
  )
}
