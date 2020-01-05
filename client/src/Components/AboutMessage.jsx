import React from 'react';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const AboutMessage = () => {
    return (
        <div className='mt-1'>
            <h1 className='header-1'>About Score Receiver</h1>
            <p className='f-1'>Score Receiver was built using Python Flask and React with Redux.  <br/>All scores are grabbed from a csv file,<br/> formated in python
                and then served via a REST api. <br/> All state is managed via Redux and all styling is handled with the Material-UI api. <br/> Additionally, all
                charting is handled with D3.</p>
            <Button variant='contained'><NavLink className='no-underline color-main' to='/'>Return Home</NavLink></Button>
        </div>
    )
};

export default AboutMessage;