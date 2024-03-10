import React from 'react'
import Brand1 from '../Services/ImgPartners/br-1.png'
import Brand2 from '../Services/ImgPartners/br-2.png'
import Brand3 from '../Services/ImgPartners/br-3.png'
import Brand4 from '../Services/ImgPartners/br-4.png'
import Brand5 from '../Services/ImgPartners/br-5.png'


const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200'>
      <div className='container'>
        <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
            <img src={Brand1} alt="Brand" className='w-[80px]' />
            <img src={Brand2} alt="Brand" className='w-[80px]' />
            <img src={Brand3} alt="Brand" className='w-[80px]' />
            <img src={Brand4} alt="Brand" className='w-[80px]' />
            <img src={Brand5} alt="Brand" className='w-[80px]' />
        </div>
      </div>
    </div>
  )
}

export default Partners
