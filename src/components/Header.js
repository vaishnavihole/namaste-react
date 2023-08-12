const Header  = () => {
    return (
        <div className="header">
          <div className='Logo-container'>
            <img  className='logo' src= "https://www.roadtocode.org/static/media/logo.8dd0bf20731ffeceb4ee.png"/>
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
export default Header;

