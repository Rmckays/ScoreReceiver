import React from 'react';
import {connect} from 'react-redux';
import Showcase from "../../Components/Showcase";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Greeting from "../../Components/Greeting";

const HomePage = props => {

    return (
        <>
            <Showcase childComp={<Greeting/>}/>
            <Navigation />
            <Footer/>
        </>
    )

};

// const mapStateToProps = state => {
//     return {
//         teams: state.teams,
//     }
// };

export default HomePage;