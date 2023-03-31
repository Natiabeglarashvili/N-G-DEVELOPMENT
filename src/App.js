import React from "react"
import Main from './components/Main'
import Navbar from "./components1/Navbar"
import "./App.css"
import Footer from "./footer/footer"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./about/about"
import Apartments from "./apartments/apartments"
import Completedprojeqt from "./completedprojeqt/completedprojeqt"
import Contact from "./contact/contact"


function App () {
  return (
    
      <div>
        <BrowserRouter>
         <Navbar />
         <Routes>
         <Route path="/"element={<Main />} />
         <Route path="/about" element={<About />} />
         <Route path="/apartments" element={<Apartments />} />
         <Route path="/completedprojeqt" element={<Completedprojeqt />} />
         <Route path="/contact" element={<Contact />} />
          </Routes>
         <Footer />
         </BrowserRouter>
     </div>
  )
}

export default App;
