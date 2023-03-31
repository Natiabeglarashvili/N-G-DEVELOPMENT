import react from "react"


import "./slide.css";


import img2 from  '../image/img2.png'
import img3 from  '../image/img3.png'
import img4 from  '../image/img4.png'
import img5 from  '../image/img5.png'



function Slider (){
    return (
    
        <div className="main-slide">
                
                <div>
                    <img src={img2} />
                    <p className="legend"> ფართი 85 კვადრატი</p>
                </div>
                <div>
                    <img src={img3}  />
                    <p className="legend">ფართი 80 კვადრატი</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">ფართი 120 კვადრატი</p>
                </div>
                <div>
                    <img src={img5}  />
                    <p className="legend">ფართი 100 კვადრატი</p>
                </div>
            </div>
    )
}


export default Slider;