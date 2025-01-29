
import About from './components/About'
import  Home  from './components/Home'
import Navbar from './components/Navbar'
import Data from './components/Data'
import { Element } from 'react-scroll'
import './App.css'
import Footer from './components/Footer'


function App() {
  
// 5725dee16c8a46ec8b584833252901
  
     return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections with Element to mark scroll targets */}
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="search">
        <Data />
         </Element>
         <Footer/>
    </div>
  );
  
}

export default App
