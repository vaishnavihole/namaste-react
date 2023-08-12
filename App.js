import React from 'react';
import ReactDOM from 'react-dom/client';


const Header  = () => {
    return (
        <div className="header">
          <div className='Logo-container'>
            <img  className='logo' src="https://www.roadtocode.org/static/media/logo.8dd0bf20731ffeceb4ee.png" />
          </div>

          <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
          </div>
        </div>
    )
};

const RestaurantCard = (props)=> {
  const  {resName, cuisine, stars, minutes} = props;

  
  return(
     <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
      <img 
      className='res-logo'
      alt="res-logo" 
      src="https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>{minutes}</h4>
     </div>
  )
}


const Body = () => {
   return (
    <div className='body'>
     <div className='search'>Search</div>
     <div className='res-container'>
      <RestaurantCard resName="Meghna Food"  cuisine="Biryani, North Indian, Asian" stars="3.4 stars"  minutes="39 minutes"/>
      <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" stars="4.4 stars" minutes="38 minutes"/>
     </div>
    </div>
   )
}

const AppLayout = () => {
    return (
        <div className="app">
         <Header />
         <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />);