import React from 'react';
import {Button} from "@material-ui/core";
import SearchTeam from "../Containers/Pages/SearchTeam";
import {NavLink} from "react-router-dom";

const Greeting = () => {
    return (
        <div className='pt-1 text-white'>
            <h1 className='header-1'>Welcome to Score Receiver</h1>
            <p className='f-1'>The place to find all the game results for your favorite teams in the NFL.</p>
            <Button variant='contained'><NavLink className='no-underline color-main' to='/search'>Search Teams</NavLink></Button>
        </div>
    )
};

export default Greeting;