
import about from "../assets1/aboutimg.jpg";
import './about.css'
import grin1 from  '../assets1/grin1.jpg'
import grin2 from  '../assets1/grin2.jpg'
import grin3 from  '../assets1/grin3.jpg'


function About (){
    return(


     <div className="about-img">
        <img src={about}alt=""/> <br></br>
        <a> ათ წლიანი გამოცდილება</a>
        
        <div className="about">
          <h6>კომპანიის შესახებ</h6>
          <p>ჩვენი კომპანია არა მხოლოდ  საქართველოში არამედ მის ფარგლებს გარეთ ქმნის უამრავ არქიტექტორულ შედევრს, 
            უკვე 10 წლის განმავლობაში 100-მდე 
            საცხოვრებელი სახლი და 5 სააგარაკე დასახლება ავაშენეთ.<br></br> სწორედ ამ გამოცდილების გათვალისწინებით, რომელიც 
            N&G Development-ის გუნდმა საერთაშორისო ასპარეზზე მიიღო, აღმოჩნდა რომ ადამიანები უფრო და უფრო მეტად 
            მიისწრაფვიან წყნარი და გამწვანებული დასახლებული პუნქტების მიმართ, სადაც შეეძლებათ მშვიდ, კომფორტულ 
            და ეკოლოგიურად სუფთა გარემოში ცხოვრება.</p>

            <h6>ხარისხი უპირველეს ყოვლისა</h6>
            <p>ჩვენი მთავარი ამოცანაა, არა უბრალოდ აგიშენოთ სახლი განსაზღვრულ ტერიტორიაზე, <br></br>არამედ ყურადღება 
              გავამახვილოთ სამშენებლო მასალებზე, მის სწორად გამოყენებაზე, გაგიმარტივოთ ყველა ის 
              დამღლელი ნაბიჯი, რომელთაც არქიტექტურული, სამშენებლო თუ ბიუროკრატიული თვალსაზრისით, ეს პროცესი 
              მოიცავს.<br></br> გარდა ამისა  N&G Development-ის უნდმა შეიმუშავა ყველა ის ნაბიჯი როგორიცაა სხვადასხვა კომპანიებთან 
              თანამშრომლობა რაც კომფორტულს გახდის მთლიანად როგორც სამშენებლო პერიოდს ისე დასრულების შემდეგ </p>
        </div>

          <div className="green">
           <h6>N&G Development - ის პრიორიტეტი ეკოლოგიურად სუფთა და მწვანე გარემოა, რომელსაც თავად ჩვენი გუნდის 
             წევრები ქმნიან !</h6>
             <img src={grin1}alt="#"/> 
             <img src={grin2}alt="#"/>
             <img src={grin3}alt="#"/>
          </div>



        <div className="namber">
             <h6>100 + შესრულებული პროექტი</h6>
             <h6>10 + ათ წლიანი გამოცდილება</h6>
             <h6>40 + თანამშრომელი</h6>
        </div>
      </div>
    )
}





export default About;