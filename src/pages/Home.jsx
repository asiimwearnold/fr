import React from 'react'
import Header from '../components/header/Header'
//import Navbar1 from '../components/navbar/Navbar1'
import Navbar1 from '../components/navbar/Navbar1'
import Featured from '../components/featured/Featured'
import './home.css'
import PropertyList from '../components/propertyList/PropertyList'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties'
import MailList from '../components/mailList/MailList'
import Footer from '../components/footer/Footer'
//import FrontCard from '../components/card/FrontCard'
import Header1 from '../components/header/Header1'
import Featured1 from '../components/featured/Featured1'
//import Slider from 'react-slick'
import Card3 from '../components/card/Card3'


const Home = () => {
  return (
    <div>
      
      <Navbar1/>
      <Header1/>
      <Header/>
      {/* <Slider/> */}
      {/* <FrontCard/> */}
     
      <div className="homeContainer">
         <Featured1/> 
         <Card3/>
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/> 
        <h1 className="homeTitle">Browse Homes</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home