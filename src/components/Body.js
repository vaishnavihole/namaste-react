import RestaurantCard from "./RestaurantCard.js"
const Body = () => {
    return (
     <div className='body'>
      <div className='filter'>
        
      </div>
      <div className='res-container'>
       <RestaurantCard resName="Meghna Food"  cuisine="Biryani, North Indian, Asian" stars="3.4 stars"  minutes="39 minutes"/>
       <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" stars="4.4 stars" minutes="38 minutes"/>
      </div>
     </div>
    )
 }

 export default Body;