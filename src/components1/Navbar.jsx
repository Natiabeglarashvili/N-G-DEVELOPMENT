import React, {useState} from "react";
import "../navbar.css"
import {Link} from "react-router-dom"



function Navbar () {
  const [active,setActive]=useState ("nav_menu");
  const [toggleIcon, setToggleIcon]=useState ("nav_toggler");



    const navToggle = () => {
        active === "nav_menu" ? setActive ("nav_menu nav_active"): setActive ("nav_menu");
    


      //TogglerIcon

      toggleIcon === "nav_toggler" ? setToggleIcon ("nav_toggler toggle"):setToggleIcon("nav_toggler");

    };




 return (
  <nav className="nav">
    <a href="#" className="nav_brand">N&G DEVELOPMENT</a>
   
    <ul className={active}>
      <li className="nav_item"><Link to={'/'} className="nav_link">მთავარი</Link></li>
      <li className="nav_item"><Link to={'/about'} className="nav_link">ჩვენ შესახებ</Link></li>
      <li className="nav_item"><Link to={'/apartments'}className="nav_link">ბინები</Link></li>
      <li className="nav_item"><Link to={'/completedprojeqt'}className="nav_link">დასრულებული პროექტები</Link></li>
      <li className="nav_item"> <Link to={'/contact'}className="nav_link">კონტაქტი</Link></li>
    </ul>
  
    <div onClick={navToggle} className={toggleIcon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
)

}
export default Navbar;