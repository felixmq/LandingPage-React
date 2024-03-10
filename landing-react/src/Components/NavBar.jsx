import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const NavBar = () => {
   
    // Menu items array
    const menuLinks = [
        {
            id:1,
            name:'Home',
            link:'/#'
        },
        {
            id:2,
            name:'Shop',
            link:'/#shop'
        },{
            id:3,
            name:'About',
            link:'/#About'
        },{
            id:4,
            name:'Blogs',
            link:'/#Blogs'
        }
    ]

    // DropDown links 

    const dropDownLink = [
        {
            id:1,
            name:'Trending Products',
            link:'/#'
        },
        {
            id:2,
            name:'Best selling',
            link:'/#'
        },
        {
            id:3,
            name:'Top Rated',
            link:'/#'
        }
    ]


  return (
    <div className='relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between items-center'>
            {/* Logo y enlaces  */}
            <div className='flex gap-4 items-center'>
                <div>
                    <a className='text-primary font-semibold text-2xl uppercase sm:text-3xl' href="#">FShop</a>
                </div>
                {/* menu items */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                        {menuLinks.map((items, index) => (
                            <li key={index}>
                                <a className='inline-block px-4 fontsemibold text-gray-500 hover:text-black' href={items.link}>
                                    {items.name}
                                </a>
                            </li>
                        ))}
                        {/* Dropdown */}
                        <li className='relative cursor-pointer group'>
                            <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500'>
                                Quick Links
                                <span className='group-hover:rotate-180 duration-300'>
                                <FaCaretDown />
                                </span>
                            </a>
                            <div className='absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md]'>
                                <ul>
                                    {
                                        dropDownLink.map((item, index) => (
                                            <li key={index} className='space-y-2'>
                                                <a href={item.link} className='text-gray-500  hover:text-black inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>   
                    </ul>
                </div>
            </div>
                {/* search bar */}
            <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder="Search" className='search-bar' />
                        <CiSearch className='text-xl text-gray-600 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200'/>
                    </div>
                    {/* btn cart */}                                                                                                                     
                    <button className='relative p-3'>
                        <FaCartShopping />
                        <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs '>
                        5
                    </div>
                    </button>       
            </div>
                {/* NavBar Mob */}
        </div>
      </div>
    </div>
  )
}

export default NavBar
