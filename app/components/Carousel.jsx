import React from 'react'

const Carousel = () => {
  return (
  
      <div className="flex w-full my-10 rounded-md justify-center bg-info-content">
        <div className="carousel rounded-box mt-10 w-4/5">
          <div id="slide1" className="carousel-item w-full relative justify-around ">
            <img src="/images/Carousel/Zorostatue.png" className='w-3/4' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide4" className="btn btn-outline btn-circle bg-white w-11">❮</a>
           <a href="#slide2" className="btn btn-outline btn-circle bg-white w-11">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item w-full relative justify-around ">
      <img src="/images/Carousel/FMAstatue.png" className='w-3/4' />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
        <a href="#slide1" className="btn btn-outline btn-circle bg-white w-11">❮</a>
        <a href="#slide3" className="btn btn-outline btn-circle bg-white w-11">❯</a>
        </div>
          </div>
          <div id="slide3" className="carousel-item w-full relative justify-around ">
      <img src="/images/Carousel/Narutostatue.png" className='w-3/4' />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
        <a href="#slide2" className="btn btn-outline btn-circle bg-white w-11">❮</a>
        <a href="#slide4" className="btn btn-outline btn-circle bg-white w-11">❯</a>
          </div>
          </div>
          <div id="slide4" className="carousel-item w-full relative justify-around ">
            <img src="/images/Carousel/Inosukestatue.png" className='w-3/4' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a href="#slide3" className="btn btn-outline btn-circle bg-white w-11">❮</a>
              <a href="#slide1" className="btn btn-outline btn-circle bg-white w-11">❯</a>
          </div>
          </div>
        
        </div>
      </div>

  )
}

export default Carousel