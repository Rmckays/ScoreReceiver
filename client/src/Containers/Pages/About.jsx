import React, {useEffect} from 'react';
import Showcase from "../../Components/Showcase";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Backdrop from "../../Components/Backdrop";
import AboutMessage from "../../Components/AboutMessage";
import * as dispatchState from "../../Stores/actionTypes";
import {connect} from "react-redux";

const AboutPage = props => {

    useEffect(() => {
        props.resetTable();
    }, []);

    return (
        <>
            <Backdrop />
            <Showcase childComp={<AboutMessage/>}/>
            <Navigation />
            <Footer/>
        </>
    )
};

const mapStateToProps = state => {
    return {
        showTable: state.showTable
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetTable: () => {
            dispatch({type: dispatchState.resetShowTable, val: false})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);