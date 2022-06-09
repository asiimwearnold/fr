import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import './home.css'
import PropertyList from '../components/propertyList/PropertyList'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties'
import MailList from '../components/mailList/MailList'
import Footer from '../components/footer/Footer'
import FrontCard from '../components/card/FrontCard'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <FrontCard/>
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