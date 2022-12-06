 import logo from "../Images/logo.png"
 import {RiShoppingCartLine} from "react-icons/ri"
 import {IoNotificationsOutline} from "react-icons/io5"
 import {VscAccount} from "react-icons/vsc"
 import {Link} from "react-router-dom";
import { useCart } from "../../Context/context";
 
 function Header () {

  const {state:{cart}} = useCart();
  const cartValue = cart.length;
  const notificationValue = 0;
 
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
              cartValue > 0 &&
              <text className="badge-icon1">{cartValue}</text>
            }
          </i>

          <i className=" header icon">
            <Link to ="/notification">
              <IoNotificationsOutline className="icon-color">
              </IoNotificationsOutline>
              </Link>
              {
                notificationValue > 0 &&
                 <text className="badge-icon1">{notificationValue}</text>
              }
             
          </i>
            
          <i className=" header icon"><VscAccount className="icon-color"/>
          </i>
        </div>

        
      </>
    )
 }

 export default Header;