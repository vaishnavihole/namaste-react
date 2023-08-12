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

  export default RestaurantCard;