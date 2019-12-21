import React from "react";
import style from './Components.modules.css';
import Greeting from "./Greeting";

const Showcase = ({childComp}) => {
    return (
        <div className="backdrop">
            <div className='d-flex justify-content-center align-items-center'>
                {childComp}
            </div>
        </div>
    )
};

export default Showcase;