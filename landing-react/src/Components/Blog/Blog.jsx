import React from 'react'
import Heading from '../Services/Heading'
import img1 from '../BlogsImagen/blog-1.jpg'
import img2 from '../BlogsImagen/blog-2.jpg'
import img3 from '../BlogsImagen/blog-3.jpg'

const BlogData = [{
    title: "How to choose perfect smartch",
    Subtitle: "minima facere deserunt vero illo beate deleniti eius dolores consequuntur, eligendi corporis mairoes melesties laudintium porro",
    published: " jan 20, 2024 by dilshad",
    img: img1
},{
    title: "How to choose perfect smartch",
    Subtitle: "minima facere deserunt vero illo beate deleniti eius dolores consequuntur, eligendi corporis mairoes melesties laudintium porro",
    published: " jan 20, 2024 by dilshad",
    img: img2
},{
    title: "How to choose perfect smartch",
    Subtitle: "minima facere deserunt vero illo beate deleniti eius dolores consequuntur, eligendi corporis mairoes melesties laudintium porro",
    published: " jan 20, 2024 by dilshad",
    img: img3
}]

const Blog = () => {
  return (
    <div className='py-12'>
      <div className='container'>
        {/* Header */}
        <Heading title="Recent News" subtitle={"explore our Blogs"}/>
        {/* Card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {BlogData.map((items, index)=>(
                <div key={index}>
                    <div className='overflow-hidden rounded-2xl mb-2'>
                        <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-300' src={items.img}/>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>{items.published}</p>
                        <p className='font-bold line-clamp-1'>{items.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600'>{items.Subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
