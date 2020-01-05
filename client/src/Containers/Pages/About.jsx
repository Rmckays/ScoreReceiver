import React from 'react';
import Showcase from "../../Components/Showcase";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Backdrop from "../../Components/Backdrop";
import AboutMessage from "../../Components/AboutMessage";

const AboutPage = props => {

    return (
        <>
            <Backdrop />
            <Showcase childComp={<AboutMessage/>}/>
            <Navigation />
            <Footer/>
        </>
    )

};

export default AboutPage;