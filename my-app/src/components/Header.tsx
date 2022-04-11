import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  const a = JSON.parse(localStorage.getItem('user') as string);
  // console.log(a.user._id);
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    // console.log(event.target.value);
    localStorage.removeItem('user');
    window.location.reload();
  };
  return (
   
<nav className="bg-white shadow">
  <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div className="flex justify-between items-center">
      <div>
        <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="/"> Luxiwood</a>
      </div>
      <div className="flex flex-col-5 md:flex-row md:mx-8">
      <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/">Home</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="product">Sản Phẩm</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="blog">Tin Tức</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/admin">Admin</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="contact">Liên Hệ</a>
      </div>
      <div className="flex md:hidden">
        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    
    <div className="md:flex items-center">
      <div className="flex flex-col-5 md:flex-row md:mx-8">
       
        <div className="hidden sm:flex flex-row space-x-2">
          {a == null ? (<div> 
          <a href="/signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</a>
          <a href="/signin" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign In</a></div>)
           : ( <div>
             <span className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{a.user.email}</span>
           <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"onClick={(e) => handleClick(e, "clicked")}>Đăng xuất</button>
           </div>)}
         
        </div>
      </div>
      <div className="flex justify-center md:block">
        <a className="relative text-gray-700 hover:text-gray-600" href="/cart">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs" />
        </a>
      </div>
    
    </div>
  </div></nav>




  );
};

export default Header;