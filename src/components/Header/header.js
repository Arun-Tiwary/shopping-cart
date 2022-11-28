 import logo from "./Images/logo.png"
 import {RiShoppingCartLine} from "react-icons/ri"
 import {IoNotificationsOutline} from "react-icons/io5"
 import {VscAccount} from "react-icons/vsc"
 
 function Header (){
  const cartSize = 33;
  const iconSize = "30px";
    return(
        <>
        <div className="header">
          <img className="brand-logo" src={logo} alt="brand logo"></img>
          <h5 className=" header brand-name">  OCEANARE </h5>
          <input className=" header search" placeholder="Search a product" />
         
            <i className=" header icon"><RiShoppingCartLine fontSize = {iconSize} >
            </RiShoppingCartLine >
            {
              cartSize > 3 &&
            <text className="badge-icon1">{cartSize}</text>
 }
            </i>
            <i className=" header icon"><IoNotificationsOutline fontSize = {iconSize} >
           
            </IoNotificationsOutline>
            <text className="badge-icon2">{cartSize}</text>
            </i>
            <i className=" header icon"><VscAccount fontSize = {iconSize} /></i>
          </div>

        
        </>
    )
 }

 export default Header;