import React from 'react'


const Banner = ({ bannerData }) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
        <div className='container'>
            <div style={{backgroundColor: bannerData.bgColor}} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                {/* First */}
                <div className='p-6 sm:p-8'>
                    <p className='text-sm'>{bannerData.discount}</p>
                    <h1 className='uppercase text-4xl lg:text-7xl'>{bannerData.title}</h1>
                    <p className='text-sm'>{bannerData.date}</p>
                </div>
                {/* Second */}
                <div>
                    <img src={bannerData.Imagen} alt="" className='scale-125 w-[250px] md:w=[340px] mx-auto drop-shadow-2xl object-cover' />
                </div>
                {/* Third */}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p className='font-bold text-xl'>{bannerData.title2}</p>
                    <p className='text-3xl sm:text-5xl font-bold'>{bannerData.title3}</p>
                    <p className='text-sm'>{bannerData.title4}</p>
                    <div>
                        <button style={{color:bannerData.bgColor}} className='bg-white py-2 px-4 rounded'>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
