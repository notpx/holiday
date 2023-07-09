import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div><header class="text-white bg-black body-font">
    <div class="container bg-black mx-auto justify-between flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
        
        <span class="ml-3 bravo text-xl text-white">Xerxes Perfromance</span>
      </a>
      
      <button class="inline-flex items-center  hover:bg-rose-600 border-0 py-1 px-3 focus:outline-none bg-lime-500 rounded text-base mt-4 md:mt-0">Contact Us
       
      </button>
    </div>
  </header></div>
  )
}

export default Navbar