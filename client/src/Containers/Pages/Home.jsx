import React from 'react';
import {connect} from 'react-redux';
import Showcase from "../../Components/Showcase";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";

const HomePage = props => {

    return (
        <>
            <Showcase/>
            <Navigation />
            <Footer/>
        </>
    )

};

const mapStateToProps = state => {
    return {
        teams: state.teams,
    }
};

export default connect(mapStateToProps)(HomePage);