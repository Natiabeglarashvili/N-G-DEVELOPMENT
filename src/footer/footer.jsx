import React from "react";
import './footer.css';
import fb from "../assets1/fb.png";
import linkedin from "../assets1/in.png";



const Footer =()=>{
  return (
    <div className="footer">
        <h4>N&G DEVELOPMENT</h4>
        
        <div className="socialmedia">
           <img src={fb}alt=""/>
           <img src={linkedin}alt=""/>
        </div>
        <h6>საიტი დამზადებულია  ნ.ბ  მიერ </h6>
    </div>
  )
}
export default Footer;