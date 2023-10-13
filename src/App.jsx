import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Potfolio';

const App = () => {
    return (

        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        </>

    )

}

export default App;
