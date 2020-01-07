import React from 'react';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Greeting = () => {
    return (
        <div className='mt-1'>
            <h1 className='header-1'>Welcome to Score Receiver</h1>
            <p className='f-1'>The place to find all the game results for your favorite teams in the NFL.  <br/>Score Receiver has stats for the NFL from the last 40 years.</p>
            <Button variant='contained' color="primary"><NavLink className='no-underline text-white' to='/search'>Search Teams</NavLink></Button>
        </div>
    )
};

export default Greeting;