import React from 'react'
import Button from '../Button'
import Imagen from '../Imagenes/gaming.png'
import Imagen1 from '../Imagenes/speaker.png'
import Imagen2 from '../Imagenes/vr.png'

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First */}
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Gaming</p>
                        <Button text='Browse' bgColor={'bg-primary'} textColor={'text-white'}/>
                    </div>
                </div>
                <img src={Imagen} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
            </div>
            {/* Second */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Virtual</p>
                        <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandGreen'}/>
                    </div>
                </div>
                <img src={Imagen2} alt="" className='w-[250px] absolute buttom-0' />
            </div>
            {/* Third */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-200'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Speaker</p>
                        <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandBlue'}/>
                    </div>
                </div>
                <img src={Imagen1} alt="" className="w-[200px] absolute bottom-0 right-0"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
