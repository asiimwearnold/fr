import React from 'react'
import'./searchitem.css'
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBk7UGE-D4QEYhnqTx2aATlmE5i3fxR_xIPw&usqp=CAU"
            alt="img"
            className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle"> Tower Street Apartments</h1>
            <span className="siDistance"> 500m from main road</span>
            <span className="siTaxiOp">Free viewing</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning  
            </span>
            <span clasName="siFeatures">2 living rooms. 4 bathrooms . 31m </span>
            <span clasName="siCancelOp"> Free cancellation </span>
            <span clasName="siCancelOpSubtitle">
                
            </span>
        </div>
        <div className="isDetails"> Details</div>
    </div>
  )
}

export default SearchItem