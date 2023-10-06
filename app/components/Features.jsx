import React from 'react'

const Features = () => {
  return (
    <div className="grid grid-cols-2 grid-flow-row mt-10 mt-2  justify-items-center items-center bg-pink-200 rounded-xl xl:h-96 xl:grid-cols-4 xl:grid-flow-col ">
        <div className="card w-40 my-5 bg-base-100 shadow-xl md:w-64 xl:w-80">
            <figure className="px-14 pt-5 w-full">
                <img src="/images/Features/FreeShipping_img.png" alt="Delivery" className="rounded-xl w-full"/>
            </figure>
            <div className="py-5 items-center text-center">
                <a className="btn bg-pink-400 no-animation">Delivery</a>
            </div>
        </div>
        <div className="card w-40 my-5 bg-base-100 shadow-xl md:w-64 xl:w-80">
            <figure className="px-14 pt-5 w-full">
                <img src="/images/Features/OnlineOrder_img.png" alt="Online Order" className="rounded-xl w-full"/>
            </figure>
            <div className=" py-5 items-center text-center">
                <a className="btn bg-green-400 no-animation">Online Order</a>
            </div>
        </div>
        <div className="card w-40 my-5 bg-base-100 shadow-xl md:w-64 xl:w-80">
            <figure className="px-14 pt-5 w-full">
                <img src="/images/Features/SaveMoney_img.png" alt="Save Money" className="rounded-xl w-full"/>
            </figure>
            <div className=" py-5 items-center text-center">
                <a className="btn bg-orange-400 no-animation">Save Money</a>
            </div>
        </div>
        <div className="card w-40 my-5 bg-base-100 shadow-xl md:w-64 xl:w-80">
            <figure className="px-14 pt-5 w-full">
                <img src="/images/Features/Variety_img.png" alt="Variety" className="rounded-xl w-full"/>
            </figure>
            <div className=" py-5 items-center text-center">
                <a className="btn bg-blue-400 no-animation">Variety</a>
            </div>
        </div>
    </div>
  )
}

export default Features