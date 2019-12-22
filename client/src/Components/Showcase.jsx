import React from "react";
import style from './Components.modules.css';
import DenseTable from "./Table";
import {connect} from "react-redux";

const Showcase = (props) => {
    const showTable = (props.seasonVsHistory) ? <DenseTable/> : null;

    return (
        <div className="backdrop">
            <div className='d-flex justify-content-center align-items-center'>
                <div className="showcaseChild">
                    {props.childComp}
                </div>

                {showTable}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        seasonVsHistory: state.seasonVsHistory,
    }
};

export default connect(mapStateToProps)(Showcase);