import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import Services from '../components/Services';
import InvestmentFunction from '../components/InvestmentFocus';
import AboutSection from "../components/AboutSection";


function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <Services/>
            <AboutSection/>
            <InvestmentFunction/>
            <ProcessSection />
        </>
    );
}

export default Home;
