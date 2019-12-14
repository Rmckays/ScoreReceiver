import React from "react";
import styles from './Components.modules.css';
import Greeting from "./Greeting";

const Showcase = () => {
    return (
        <div className="backdrop">
            <div className='d-flex justify-content-center align-items-center'>
                <Greeting/>
            </div>
        </div>
    )
};

export default Showcase;