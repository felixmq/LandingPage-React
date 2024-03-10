import React from 'react'
import Slider from "react-slick";
import Imagen from '../Components/Imagenes/headphone.png'
import Imagen1 from '../Components/Imagenes/vr.png'
import Button from '../Components/Button'

const HeroData = [
    {
        id:1,
        img:Imagen,
        subtitle:'Beats Solo',
        title:'Wireless',
        title2:'Headphone'
    },
    {
        id:2,
        img:Imagen1,
        subtitle:'Beats Solo',
        title:'Wireless',
        title2:'Virtual'
    }
]

const Hero = () => {
    const settings = {
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplaySpeed: 4000,
        cssEase: "aase-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    }
  return (
    <div className='container'>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        {/* Hero  */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {
                     HeroData.map((items) => (
                            <div key={items.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{items.subtitle}</h1>
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{items.title}</h1>
                                        <h1 className='text-5xl uppercase text-white sm:text-[80px] md:text-[100px xl:text-[150px] font-bold]'>{items.title2}</h1>
                                        <div>
                                            <Button text='Shop by Captegory' bgColor='bg-primary' textColor='text-white'/>
                                        </div>
                                    </div>
                                    <div className='orden-1 sm:order-2'>
                                        <div>
                                            <img src={items.img} alt="" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto relative z-40' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                ))
            }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero
