import React from 'react'

const Carousel = () => {
  return (
  
      
        <div className="flex w-60  sm:w-72 xl:w-full mx-auto border-  rounded-xl  justify-center bg-violet-200">
          <div className="carousel rounded-box mt-10 w-full xl:justify-center xl:gap-x-10 ">

            <div id="slide1" className="carousel-item w-full relative justify-around rounded-xl xl:w-60">
              <img src="/images/Carousel/Zorostatue.png" className='w-full' />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a href="#slide4" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❮</a>
             <a href="#slide2" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❯</a>
              </div>
            </div>
          
            <div id="slide2" className="carousel-item w-full relative justify-around rounded-xl xl:w-60">
              <img src="/images/Carousel/Narutostatue.png" className='w-full' />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                <a href="#slide1" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❮</a>
                <a href="#slide3" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❯</a>
              </div>
            </div>

            <div id="slide3" className="carousel-item w-full relative justify-around rounded-xl xl:w-60">
              <img src="/images/Carousel/Inosukestatue.png" className='w-full' />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                <a href="#slide2" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❮</a>
                <a href="#slide4" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❯</a>
              </div>
            </div>

            <div id="slide4" className="carousel-item w-full relative justify-around rounded-xl xl:w-60">
              <img src="/images/Carousel/Gojo_statue.png" className='w-full' />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                <a href="#slide3" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❮</a>
                <a href="#slide1" className="btn btn-outline btn-circle bg-white w-6 xl:hidden">❯</a>
              </div>
            </div>
        
          </div>
        </div>
      

  )
}

export default Carousel