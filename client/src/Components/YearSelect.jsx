import React from 'react';
import {connect} from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import * as dispatchState from "../Stores/actionTypes";

const yearList = [
    '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017', '2018'
];

const YearSelect = props => {

    const handleChange = event => {
        if(props.seasonOrHistory){
            props.changeYear(event.target.value)
        }else {
            props.changeSeason(event.target.value);
        }
    };

    const years = yearList.map(year => {
        return(
            <MenuItem value={year}>{year}</MenuItem>
        )
    });

    return (
        <Select
            className="bg-white w-2 ml-1 my-2r"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
        >
            {years}
        </Select>
    )
};

const mapStateToProps = state => {
    return {
        year: state.year,
        season: state.season,
        seasonOrHistory: state.seasonOrHistory,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeYear: year => {
            dispatch({type: dispatchState.changeYear, val: year})
        },
        changeSeason: year => {
            dispatch({type: dispatchState.changeSeason, val: year})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(YearSelect)