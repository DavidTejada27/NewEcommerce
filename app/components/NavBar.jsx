import React from 'react'

 const NavBar = () => {
  return (
    <div className="navbar p-3  rounded-xl shadow-md">
  <div className="flex-1 h-20">
    <a className="relative btn btn-ghost w-20 sm:w-96 h-full normal-case text-xl hover:bg-slate-100  ">
      <img className="sm:hidden flex absolute left-0  w-20" src="/images/logo/animeLogo-b-i.png" alt="Logo" />
      <img className="hidden sm:flex absolute left-0 w-full" src='/images/logo/animeLogo-b.png' alt='Logo'/>
      </a>
  </div>
  <div className=" absolute flex-none right-0 ">
    <div className="dropdown dropdown-end text-black">
      <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-slate-100">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end p-1">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-slate-100">
        <div className="w-10 rounded-full">
          <img src="/images/assets/Perfil2x2.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black  rounded-box w-52">
        <li>
          <a className="justify-between ">
            Profile
            <span className="badge ">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavBar