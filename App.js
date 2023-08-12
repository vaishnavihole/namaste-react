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

const RestaurantCard = () => {
  return(
     <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
      <img 
      className='res-logo'
      alt="res-logo" 
      src="https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg"/>
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
     </div>
  )
}


const Body = () => {
   return (
    <div className='body'>
     <div className='search'>Search</div>
     <div className='res-container'>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
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