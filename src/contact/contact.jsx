import "./contact.css"

import fb from "../assets1/fb.png";
import linkedin from "../assets1/in.png";



function Contact (){
  return(
    <div className="contact">
       <h1>საკონტაქტო ინფორმაცია</h1>

       <h3>მეილი:</h3>
       <p>ngdevelopment@mail.com</p>

       <h3>ტელეფონი:</h3>
       <p>322 200 200;   322 200 220</p>

       <h3>ოფისი:</h3>
       <h4>თბილისი, დიღომი პეტრიწის N2</h4> 

       <div className="socialmedia-contaqt">
           <img src={fb}alt=""/>
           <img src={linkedin}alt=""/>
        </div>

    </div>


  )


}
export default Contact