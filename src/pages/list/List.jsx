import React, {useState} from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css" 
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import SearchItem from '../../components/searchItem/SearchItem'
const List = () => {
const location = useLocation('false');
const [locations,setLocation] = useState(location.state.location)
const [date, setDate] = useState(location.state.date)
const [openDate, setOpenDate] = useState(false)
const [options, setOptions] = useState(location.state.options)


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h3 className="lsTitle"> You a looking For ..</h3>
          <div className="lsItem" >
          <label> Location </label>
            <input type="text" placeholder={`${locations}`}/>
          </div>
          <div className="lsItem">
            <label> Viewing Date </label>
            <span onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(date[0].endDate, "mm/dd/yyy")}`}</span>
          { openDate && (<DateRange
              onChange={(item) => setDate([item.selection])}
              minDate ={new Date()}
              ranges = {date}
            />)}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionsItem">
              <span className="lsOptionText">
                Rent <small>Per month</small>
              </span>
              <input type="number" min={150000 } className="lsOptionInput" placeholder={150000  +''+'Sh'}/>

            </div>
            <div className="lsOptionsItem lsOptions">
              <span className="lsOptionText" placeholder={options.room}>
                Rooms <small></small>
                
              </span><input type="number" min ={1} className="lsOptionInput"/>
            </div>
            
            
          </div>
          <button >Search</button>
        </div>

        <div className="listResult">
              <SearchItem/>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default List