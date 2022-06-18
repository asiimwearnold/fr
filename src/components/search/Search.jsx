import React from 'react'

const Search = () => {
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
        </div>

  )
}

export default Search