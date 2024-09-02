import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';
import Home from "./components/Home";
import Certification from "./components/Certification";
import Chatbot from "./components/ChatbotButton";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {

    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <Certification/>
            <Experience/>
            <Resume/>
            <Contact/>
            <Chatbot/>
           <Footer/>
        </div>
    );
}

export default App;
