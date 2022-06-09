import React from 'react'
import "./propertyList.css"
const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/283870633.webp?k=49798a9aa3e0997a583a778be86227b832d31cb097e0795b2eae2267f4e1ce56&o=" alt="img" className="pLstImg" width="242" height="242"/>
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>223 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/322975678.webp?k=42e7b47c50c29c48efae5d72da6853503e11584fc4ce45edad9bd15197a9e48b&o=&s=1" alt="img" className="pLstImg" width="242" height="242"/>
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>223 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/188040519.webp?k=244d25411ac02bf1ef026ee1a61655d12a36058999636328d3e64ce5c3ce39af&o=&s=1" alt="img" className="pLstImg" width="242" height="242" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>223 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/170020391.webp?k=e91d03fb51e091a076f14ac7b735e2b0923db620ebb40345b434452ddb7b0c97&o=&s=1" alt="img" className="pLstImg"  width="242" height="242"/>
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>223 hotels</h2>
            </div>
        </div>
        
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/215219934.webp?k=3cbdc5a43345126e8adb2c493a817ad627a6d95f9973da8a918e569aadcbf70e&o=&s=1" alt="img" className="pLstImg" width="242" height="242" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>223 hotels</h2>
            </div>
        </div>
        
    </div>
  )
}

export default PropertyList