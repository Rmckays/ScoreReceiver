import React from 'react';
import {connect} from 'react-redux';
import Showcase from "../../Components/Showcase";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import SearchInput from "../../Components/SearchInput";
import Backdrop from "../../Components/Backdrop";

const SearchTeam = () => {

    return (
        <>
            <Backdrop/>
            <Showcase childComp={<SearchInput/>}/>
            <Navigation />
            <Footer/>
        </>
    )

};

const mapStateToProps = state => {
    return {
        teams: state.teams,
        currentTeam: state.currentTeam,
        wins: state.wins,
        history: state.history
    }
};

export default connect(mapStateToProps)(SearchTeam);