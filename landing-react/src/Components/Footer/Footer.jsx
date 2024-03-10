import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'


const FooterLinks = [{
    title:"Home",
    link: "/#"
},{
    title:"About",
    link: "/#about"
},{
    title:"Contact",
    link: "/#contact"
},{
    title:"Blog",
    link: "/#Blog"
}]

const Footer = () => {
  return (
    <div>
      <div className='container'>
        <div className='grid md:grid-cols-4 pb-20 pt-5'>
            {/* Company */}
            <div className='py-8 px-4'>
                <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                    Eshop
                </a>
                <p className='tetx-gray-600 lg:pr-24 pt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eligendi voluptatum. Minus earum autem quod impedit quae, iste quaerat qui.
                </p>
                <p className='text-gray-500 mt-4'>
                    Lorem ipsum dolor sit amet.
                </p>
                <a href="#" className='inline-block bg-primary/90 text-white py-2 px-4 text-sm rounded-full'>
                    Visit our pages
                </a>
            </div>
            {/* Footer links */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                        Important LInks
                    </h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((items, index)=>(
                            <li key={index}>
                                <a href={items.link} className='text-gray-600 hover:text-black duration-300'>{items.title}</a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                {/* Second Footer links */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                        Important LInks
                    </h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((items, index)=>(
                            <li key={index}>
                                <a href={items.link} className='text-gray-600 hover:text-black duration-300'>{items.title}</a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            {/* Company Adress */}
            <div className='py-8 px-4  sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Addres</h1>
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Dominican Rep</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt/>
                                <p>+800-000-00000</p>
                            </div>
                            {/* Social Links */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                                </a>
                            </div>
                        </div>    
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
