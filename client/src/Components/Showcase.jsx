import React from "react";
import style from './Components.modules.css';
import DenseTable from "./Table";
import {connect} from "react-redux";

const Showcase = (props) => {
    const showTable = (props.showTable) ? <DenseTable/> : null;

    return (
        <div className="showcase">
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
        showTable: state.showTable
    }
};

export default connect(mapStateToProps)(Showcase);