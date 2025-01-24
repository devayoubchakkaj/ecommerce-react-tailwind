import React from 'react'

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
      <div className="container">
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
      </div>
      </div>
      
    </div>
  )
}

export default Navbar
