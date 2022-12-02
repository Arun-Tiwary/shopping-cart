 import logo from "./Images/logo.png"
 import {RiShoppingCartLine} from "react-icons/ri"
 import {IoNotificationsOutline} from "react-icons/io5"
 import {VscAccount} from "react-icons/vsc"
 import {Link} from "react-router-dom";
 
 function Header () {
  const cartSize = 33;
 
    return(
       <>
        <div className="header">

          <Link className="brand-logo" to ="/">
             <img className="brand-logo" src={logo} alt="brand logo"></img>
          </Link>
        
          <Link to ="/">
             <h5 className=" header brand-name"> OCEANARE </h5>
          </Link>

          <input className=" header search" placeholder="Search a product" />
         
          <i className=" header icon"> 
            <Link  to ="/cart">
              <RiShoppingCartLine  className="icon-color" >
              </RiShoppingCartLine >
            </Link>
            {
              cartSize > 3 &&
              <text className="badge-icon1">{cartSize}</text>
            }
          </i>

          <i className=" header icon">
              <IoNotificationsOutline className="icon-color">
              </IoNotificationsOutline>
              <text className="badge-icon1">{cartSize}</text>
          </i>
            
          <i className=" header icon"><VscAccount className="icon-color"/>
          </i>
        </div>

        
      </>
    )
 }

 export default Header;