import RestaurantCard from "./RestaurantCard.js"
import { useEffect, useState } from "react";
import Shimar from "./Shimmar.js";


const Body = () => {
     const [listOfRestaurants, setListOfRestaurants]  = useState();

     useEffect(() => {
      fetchData();
     }, []);

     const fetchData = async () => {
      const data = fetch(

      );

      const json = await data.json();

      console.log(json);
      setListOfRestaurants(json?.data?.cards[2].data?.data?.cards);
     };

    if (listOfRestaurants.length === 0) {
      return <Shimar />
    }

      

    return (
     <div className='body'>
      <div className='filter'>

      <button className="filter-btn" 
        onClick={() => {
          const filterList = listOfRestaurants.filter()
          listOfRestaurants = listOfRestaurants.filter(
             (res) => res.data.avgRating > 4
           );
           setListOfRestaurants(filterList);
        }}>
        Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
       <RestaurantCard resName="Meghna Food"  cuisine="Biryani, North Indian, Asian" stars="3.4 stars"  minutes="39 minutes"/>
       <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" stars="4.4 stars" minutes="38 minutes"/>
      </div>
     </div>
    )
 }

 export default Body;