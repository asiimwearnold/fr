import React, {Component} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { faBed, faTaxi,  faBuilding, faHotel, faWallet, faCalendar, faHouse, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './slide.css'
//import DropDownCard from '../card/dropDownCard/DropDownCard'
//import '../card/dropDownCard/styles.css'
import ItemList from '../itemlist/ItemList';






const PauseOnHover =()=>{
  var settings = {
    dots: true,
    infinte: true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 200000,
    pauseOnHover: true
  };
  return(
      
    <div >
    <h2> Lets get you settled</h2>
    <Slider {...settings}>
      <div >
          <ItemList/>
       
      </div>
      <div>
          <ItemList />
          
     
      </div>
      <div>
          <ItemList />
      </div>
      <div>
          <ItemList />
          
      </div>
      <div>
          <ItemList /> 
          
      </div>
      
      
    </Slider>
  </div>
  )
} 

export default PauseOnHover;