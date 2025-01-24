import React from 'react'
import {IoMdSearch} from 'react-icons/io';

const MenuLinks = [
  {
    id: 1,
    name : 'Home',
    link : '/#',
  },
  {
    id: 2,
    name : 'Shop',
    link : '/#shop',
  },
  {
    id: 3,
    name : 'About',
    link : '/#about',
  },
  {
    id: 4,
    name : 'Blogs',
    link : '/#blogs',
  }
]



function Navbar() {
  return (
    <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40
    '>
      <div  className='py-4'>
      <div className="container flex justify-between items-center">
        {/* Logo and Links section */}

        <div className="flex items-center gap-4">
            <a href="#"
            className='text-primary font-semibold tracking-widest text-2xl
            uppercase sm:text-3xl
            '
            >Eshop</a>
            {/*Menu Items*/}
            <div className="hidden sm:block">
               <ul className="flex items-center gap-4">
                {
                  MenuLinks.map((data,index)=>(
                       <li key={index}>
                        <a 
                        className="inline-block px-4 font-semibold
                        text-gray-500 hover:text-black
                        dark:hover:text-white duration-200
                        "
                        href={data.link}>{data.name}</a>
                       </li>
                  ))
                }
               </ul>
            </div>
        </div>
        {/* Navbar Right section */}
        <div className='flex justify-between items-center
         gap-4
         '>
          {/* Search Bar Section  */ }
          <div className='relative group hidden sm:block'>
              <input type="text" 
              placeholder="Search"
              className="search-bar"
              />
              <IoMdSearch
              className="text-xl text-gray-600
               dark:text-gray-400"
              />
          </div>




          {/* Dark Mode Section  */ }
          <div></div>
        </div>
      </div>
    </div>
  </div>
      

  )
}

export default Navbar
