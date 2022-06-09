import React from 'react'
import "./featured.css"
const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/square250/782360.webp?k=03db7bc11e26336680147fe3b1a44fbb065062fa054242fbd9ec12ebd4665d31&o=" alt="image2"/>
           <div className="featuredTitles">
                <h1>Kampala</h1>
                <h1> 124 properties</h1>   
            </div> 
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/country/375x225/1272.jpg?k=14f6bb94bb818d7d034e4a2aaaaf883529c35563f0b7268d285538b2fff844f6&o=" alt="image2"/>
           <div className="featuredTitles">
                <h1>Jinja</h1>
                <h1> 4 properties</h1>   
            </div> 
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/region/square250/55043.webp?k=86a3321a5b05d39c4ed8b376132936cde14dca7da7685cbafd4963a1636665a2&o=" alt="image2"/>
           <div className="featuredTitles">
                <h1>Entebbe</h1>
                <h1> 12 properties</h1>   
            </div> 
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/region/square250/55043.webp?k=86a3321a5b05d39c4ed8b376132936cde14dca7da7685cbafd4963a1636665a2&o=" alt="image2"/>
           <div className="featuredTitles">
                <h1>Entebbe</h1>
                <h1> 12 properties</h1>   
            </div> 
        </div>
      </div>
  )
}

export default Featured