import { faBed, faTaxi,  faBuilding, faHotel, faWallet, faCalendar, faHouse, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.css'
import {useState} from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format}from "date-fns"
import { useNavigate } from 'react-router-dom'

const Header = ({type}) => {
const [location, setLocation] = useState()
const [openDate, setOpenDate] =useState(
 false   
)
// date state  
const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
const [options, setOptions] = useState({
    room: 1
})
const handleOption=(name, operation)=>{
    setOptions((prev) =>{
        return{
            ...prev,
            [name]: operation ==="i" ? options[name] + 1 : options[name] - 1, 
        }
    })
    
}
const navigate= useNavigate()
const handleSearch =() =>{
        navigate("/hotels", {state:{location, date, options}})
}
  return (
    <div className="header">
        <div className={type === "list" ? "headContainer listMode": "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={ faBuilding} />
                <span> Rentals </span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faHotel}/>
                <span>Apartment</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faWallet}/>
                <span>Book Visit</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed}/>
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi}/>
                <span>Taxi</span>
            </div>
        </div>
        {type !== "list" && 
        <>
        <h1 className="headerTitle"> Find a home that speaks to your taste, Dont stress!</h1>
       <p className="headerDesc">Get your property listed and enjoy and take advantage of our ever growing Property Database</p>
        <button className="beaderBtn"> Sign in/ Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
               <FontAwesomeIcon icon={faHouse} className="headerIcon"/>
               <input type="text" placeholder="Location" className="headerSearchInput" onChange={(e) =>setLocation(e.target.value)}/>
            </div>

            <div className="headerSearchItem">
               <FontAwesomeIcon icon={faCalendar} className="headerIcon"/>
               <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText"> {`${format(date[0].startDate,"mm/dd/yyyy")} - ${format(date[0].endDate, "mm/dd/yyyy")}`}</span>
              {openDate &&  (<DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
                />)}
            </div>

            <div className="headerSearchItem">
               <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
               <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}> - </button>
               <span className="headerSearchText" >{`${options.room}  `} {` ${options.room >=2 ? 'bedrooms': 'Bedroom'}`}  <button className="optionCounterButton" onClick={()=>handleOption("room", "i") } > + </button></span>
              
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}> Search</button>
            </div>
        </div></>}
        </div>
    </div> 
  )
}

export default Header