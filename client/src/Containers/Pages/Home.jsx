import React, {useEffect} from 'react';
import Showcase from "../../Components/Showcase";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Greeting from "../../Components/Greeting";
import Backdrop from "../../Components/Backdrop";
import {connect} from "react-redux";
import * as dispatchState from "../../Stores/actionTypes";

const HomePage = props => {

    useEffect(() => {
        props.resetTable();
    }, []);

    return (
        <>
            <Backdrop />
            <Showcase childComp={<Greeting/>}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);