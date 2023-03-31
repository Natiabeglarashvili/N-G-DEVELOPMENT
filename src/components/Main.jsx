import React from "react"
import Apartments from "../apartments/apartments"
import videoBg from '../assets/videoBg.mp4'
import Slider from "../slide/slide"


const Main  = () => {
  return (
    <div className="main">
          
         <video src={videoBg} autoPlay loop muted/>
         <table>თბილისის ხედი შენი ხელის გულზე</table>
          <div className="content">
            <br/>
             <h1>პანორამა თბილისი</h1>
          
             <a href ="https://docs.google.com/forms/d/e/1FAIpQLSc6b61IDeOGnqQt51TUKyzl3qQnCV05ErficHS7gbC_H3Ehhw/viewform?vc=0&c=0&w=1&flr=0" target={"_blank"}>
             <button >დაგვირეკეთ <br></br> <br></br>ან შეავსეთ მოთხოვნს ფორმა და ჩვენ თავად დაგიკავშირდებით!</button>
             </a>
          </div>
             
            <br></br>
            <Apartments/>
            
    </div>
            
  )
}
export default Main