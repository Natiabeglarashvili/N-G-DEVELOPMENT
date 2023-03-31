
import './completedprojeqt.css'
import CP1 from "../assets1/CP1.jpg"
import CP2 from "../assets1/CP2.jpg"
import CP3 from "../assets1/CP3.jpg"


import grin1 from  '../assets1/grin1.jpg'
import grin2 from  '../assets1/grin2.jpg'
import grin3 from  '../assets1/grin3.jpg'


import AG1 from  '../assets1/AG1.jpg'
import AG2 from  '../assets1/AG2.jpg'
import AG3 from  '../assets1/AG3.jpg'
import AG4 from  '../assets1/AG4.jpg'
import AG5 from  '../assets1/AG5.jpg'
import AG6 from  '../assets1/AG6.jpg'


function Completedprojeqt (){
    return(
       <div className='completeprojept-menu'>
          <h1>დასრულებული პროექტები</h1> <br></br>
       
           <div className='completeprojept'>
               <div>
                 <img src={CP1}/>
                 <p>N&G DEVELOPMENT  თბილისი</p>
               </div>
               <div>
                 <img src={CP2}/>
                 <p>N&G DEVELOPMENT  ბათუმი</p>
               </div>
               
               <div>
                 <img src={CP3}/>
                 <p>N&G DEVELOPMENT  რუსთავი</p>
               </div>
           </div>



           <div className="green">
           <h6>N&G Development - ის პრიორიტეტი ეკოლოგიურად სუფთა და მწვანე გარემოა, რომელსაც თავად ჩვენი გუნდის 
             წევრები ქმნიან !</h6>
             <img src={grin1}alt="#"/> 
             <img src={grin2}alt="#"/>
             <img src={grin3}alt="#"/>
          </div>
                 <br></br><br></br>
           <h1>დასრულებული აგარაკები</h1><br></br>
          <div className='agaraki'>
               <div>
                 <img src={AG1}/>
                 <p>ტაბახმელა</p>
               </div>
               
               <div>
                 <img src={AG2}/>
                 <p>ლისი</p>
               </div>
               <div>
                 <img src={AG3}/>
                 <p>ზემო ლისი</p>
               </div>
               <div>
                 <img src={AG4}/>
                 <p>ვეძისი</p>
               </div>
               <div>
                 <img src={AG5}/>
                 <p>ბიწმენდი</p>
               </div>
               <div>
                 <img src={AG6}/>
                 <p>შინდისი</p>
               </div>
           </div>


        </div>
      

    )
}






export default Completedprojeqt;