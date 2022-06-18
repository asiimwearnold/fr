import { faCalendar, faHouse, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.css'
import {useState} from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format}from "date-fns"
import { useNavigate } from 'react-router-dom'
import PauseOnHover from '../slide/PauseOnHover'
//import ItemList from '../itemlist/ItemList'

const Header = ({type}) => {

  return (
    <div className="header">
        
        <div className={type === "list" ? "headContainer listMode": "headerContainer"}>
              <PauseOnHover />
              {/* <ItemList /> */}
        <div className="headerList">
        
                
                 
                  
           
           
        </div>
        {type !== "list" && 
        <>
        <h1 className="headerTitle"> Find a home that speaks to your taste, Dont stress!</h1>
       <p className="headerDesc">Get your property listed and enjoy and take advantage of our ever growing Property Database</p>
        <button className="beaderBtn"> Sign in/ Register</button>

</>}    
        </div>
    </div> 
  )
}

export default Header