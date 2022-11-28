 import logo from "../Images/logo.png"
 function Header (){
    return(
        <>
        <div className="header">
          <img className="brand-logo" src={logo} alt="brand logo"></img>
          <h5 className=" header brand-name">Brandsmaidaedac </h5>
          <input className=" header search" placeholder="search here" />
         
            <i className=" header icon">icon1</i>
            <i className=" header icon">icon2</i>
            <i className=" header icon">icon3</i>
          </div>

        
        </>
    )
 }

 export default Header;