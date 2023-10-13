import React from 'react'

const Carousel = () => {
  return (
  
<div>
  <div id='Statues' className='grid grid-cols-2 grid-flow-row justify-center shadow-inner'>
    <div className="carousel w-full flex-1 col-span-1 ">
      <div id="item1" className="carousel-item w-full justify-center">
        <img src="/images/Carousel/Gojostatue.png" className="w-full sm:w-2/4" />
      </div>
      <div id="item2" className="carousel-item  w-full justify-center">
        <img src="/images/Carousel/Inosukestatue.png" className="w-full sm:w-2/4" />
      </div>
      <div id="item3" className="carousel-item w-full justify-center">
        <img src="/images/Carousel/Narutostatue.png" className="w-full sm:w-2/4 " />
      </div>
      <div id="item4" className="carousel-item w-full justify-center">
        <img src="/images/Carousel/Zorostatue.png" className="w-full sm:w-2/4" />
      </div>
    </div>
    <div className='row-span-2 w-full h-full px-2 flex flex-col justify-center  text-3xl lg:text-5xl xl:text-6xl text-start bg-gradient-to-br from-gray-900 to-gray-600 text-white font-extrabold capitalize select-none'>
      Find <br />your<br />favorite<br /><h1 className='bg-clip-text text-transparent w-fit rounded-lg bg-gradient-to-b from-green-400 to-blue-400'>statue</h1>
    </div>
    <div className="flex justify-center w-full py-2 gap-2 ">
    <a href="#item1" className="btn btn-xs 2xl:btn-lg">1</a> 
    <a href="#item2" className="btn btn-xs 2xl:btn-lg">2</a> 
    <a href="#item3" className="btn btn-xs 2xl:btn-lg">3</a> 
    <a href="#item4" className="btn btn-xs 2xl:btn-lg">4</a>
  </div>
  </div>
  
  
</div>

  )
}

export default Carousel