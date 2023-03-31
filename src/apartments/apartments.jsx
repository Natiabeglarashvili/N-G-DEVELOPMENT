import Slider from "../slide/slide";
import "./apartments.css"

import NG1 from "../assets1/NG1.jpg"
import NG2 from "../assets1/NG2.jpg"
import NG3 from "../assets1/NG3.jpg"
import NG4 from "../assets1/NG4.jpg"



function Apartments (){
    return(
        <div className="apartments">
             
             <h6>მიმდინარე პროექტები</h6>
          <div className="apartments-img">
              

               <div>
                 <img src={NG1}/>
                 <p>N&G DEVELOPMENT  დიღომი</p>
               </div>
               <div>
                 <img src={NG2}/>
                 <p>N&G DEVELOPMENT  ვარკეთილი</p>
               </div>
               <div>
                 <img src={NG3}/>
                 <p>N&G DEVELOPMENT  ვაკე</p>
               </div>
               <div>
                 <img src={NG4}/>
                 <p>N&G DEVELOPMENT ორთაჭალა</p>
               </div>
                <div><Slider/></div>
          </div>
         
        </div>
         
    )
}



export default Apartments;