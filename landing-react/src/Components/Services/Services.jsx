import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdHeadset } from "react-icons/io";
import { FaWallet } from "react-icons/fa";


const Services = () => {

    const servicesData =[
        {
            id:1,
            icon:<FaCarSide className='text-4xl md:text-5xl text-primary' />,
            title:'Free Shipping',
            descrip:'Free Shipping On All Orden'
        },
        {
            id:2,
            icon:<FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
            title:'Safe Money',
            descrip:'30 Days Money Back'
        },
        {
            id:3,
            icon:<IoMdHeadset className='text-4xl md:text-5xl text-primary' />,
            title:'Online Support 24/7',
            descrip:'Technical Support 24/7'
        },
        {
            id:4,
            icon:<FaWallet className='text-4xl md:text-5xl text-primary' />,
            title:'Secure Payment',
            descrip:'All Payment Secure'
        }
    ]
  return (
    <div>
      <div className='container my-14 md:my-24'>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-8'>
            {
                servicesData.map((items) => (
                    <div key={items.id} className='flex flex-col items-center sm:items-start sm:flex-row gap-4'>
                        {items.icon}
                        <div>
                            <h1 className='lg:text-xl font-bold text-center'>{items.title}</h1>
                            <h1 className='text-gray-500 text-sm text-center'>{items.descrip}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Services
