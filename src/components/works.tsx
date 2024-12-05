import LazyLoad from "react-lazyload"

const workImages = [
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494509/OREO_copy_awt7ii.jpg',
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494514/sdott_copy_cgkqpg.webp',
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494504/bartika22_nmf5xt.webp',
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494498/acreagebrahma_copy2_iuoa71.jpg',
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494508/JNKJN_ekg8jd.jpg',
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494518/taxidriver_copy_ib9wcg.webp',
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494506/isitreal_copy_hbrkmn.webp',
  'https://res.cloudinary.com/deopzx821/image/upload/q_auto,f_auto/v1729494517/VEDA_copy2_hqirgu.jpg',

]

// import LazyLoad from "react-lazyload"

// interface image {
//   src:string,
// }
export const Works = () => {


  // const [images,setImages]= useState<image[]>([])

  // const fetchImages = async ()=>{
  //   const response = await fetch("http://localhost:9000")
  //   const data = await response.json();
  //   setImages(data)
  // }

  // useEffect(()=>{
  //   fetchImages()
  // },[])

//shade #514A2E
  return (
    <div className='my-works font-poppins py-12'>

      <div className="header w-[90%] mx-auto text-center pt-12">
        <h1 className="text-[#252525] text-4xl">My Works</h1>
      </div>

      <div className="w-[90%] p-6  mx-auto">
      <div className="header text-center p-6 ">
        <h1 className="text-lg font-light ">Here’s a glimpse of what I’ve done</h1>
      </div>

      <div className="list columns-[300px]">
        {workImages?.map((image,idx)=>(
        <LazyLoad
          key={idx} 
          height={200} 
          offset={100}
           placeholder={ <div className="spinner">Loading...</div> }>
         
          <img src={image} className="w-full mb-4 shadow-2xl cursor-pointer hover:scale-[1.01] transition-all ease-linear" alt="design-work" loading="lazy"/>
        </LazyLoad>)
        // <img src={image} className="w-full mb-4 shadow-2xl cursor-pointer hover:scale-[1.01] transition-all ease-linear" alt="design-work" loading="lazy"/>
         )}
         
      </div>
      </div>
    </div>
  )
}
