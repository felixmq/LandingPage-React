import React from 'react'
import NavBar from './Components/NavBar'
import Hero  from './Components/Hero'
import Category from './Components/Category/Category'
import Category2 from './Components/Category/Category2'
import Services from './Components/Services/Services'
import Imagen from './Components/Imagenes/headphone.png'
import Imagen1 from './Components/Imagenes/smartwatch2.png'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'
import Blog from './Components/Blog/Blog'
import Partners from './Components/Partners/Partners'
import Footer from './Components/Footer/Footer'


const bannerData = {
  discount:'30% OFF',
  title:'Fine Smile',
  date:'10 Jan to 28 Jan',
  Imagen:Imagen,
  title2:'Air Solo Bass',
  title3:'Winner Sale',
  title4:'lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
  bgColor:"#f42c37"
}

const bannerData2 = {
  discount:'30% OFF',
  title:'Happy Hours',
  date:'14 Jan to 28 Jan',
  Imagen:Imagen1,
  title2:'Smart Solo',
  title3:'Winner Sale',
  title4:'lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
  bgColor:"#2dcc6f"
}


const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner bannerData={bannerData}/>
      <Products/>
      <Banner bannerData={bannerData2}/>
      <Blog/>
      <Partners/>
      <Footer/>
    </div>
  ) 
}

export default App
 