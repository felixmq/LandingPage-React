import React from 'react'
import Heading from '../Services/Heading'
import ProductCard from './ProductCard'
import Imagen from '../ImagenProducts/p-1.jpg'
import Imagen1 from '../ImagenProducts/p-2.jpg'
import Imagen2 from '../ImagenProducts/p-3.jpg'
import Imagen3 from '../ImagenProducts/p-4.jpg'
import Imagen4 from '../ImagenProducts/p-5.jpg'
import Imagen5 from '../ImagenProducts/p-7.jpg'
import Imagen6 from '../ImagenProducts/p-9.jpg'
import Imagen7 from '../ImagenProducts/p-9.jpg'

const Products = () => {

    const ProductsData =[
        {
        id:1,
        img:Imagen,
        title:"Boat Headphone",
        Price:"120",
        delay:"0" 
        },
        {
        id:2,
        img:Imagen1,
        title:"Rocky Mountain",
        Price:"420",
        delay:"200" 
        },
        {
        id:3,
        img:Imagen2,
        title:"Goggles",
        Price:"320",
        delay:"400" 
        },
        {
        id:4,
        img:Imagen3,
        title:"Printed",
        Price:"220",
        delay:"600" 
        },

        
    ]
    const ProductsData2 =[
        {
        id:1,
        img:Imagen4,
        title:"Boat Headphone",
        Price:"120",
        delay:"0" 
        },
        {
        id:2,
        img:Imagen5,
        title:"Rocky Mountain",
        Price:"420",
        delay:"200" 
        },
        {
        id:3,
        img:Imagen6,
        title:"Goggles",
        Price:"320",
        delay:"400" 
        },
        {
        id:4,
        img:Imagen7,
        title:"Printed",
        Price:"220",
        delay:"600" 
        },

        
    ]

  return (
    <div>
        <div className='container'>
            {/* Header */}
            <Heading title={"Our Products"} subtitle={"Explore Our Products"}/>
            {/* Body */}
            <ProductCard product={ProductsData}/>
            <ProductCard product={ProductsData2}/>
        </div>
    </div>
  )
}

export default Products
