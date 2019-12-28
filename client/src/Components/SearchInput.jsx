import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as dispatchState from "../Stores/actionTypes";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Button} from "@material-ui/core";
import agent from "../API/agent";
import SearchBox from "./TeamSelect";

const SearchInput = (props) => {

    const handleChangeToHistory = event => {
        props.changeToHistory(event);
    };

    const handleSearchTeam = () => {
        props.showTable(true);
    };

    return (
        <div className='searchInput mt-1 '>
            <p className="text-white f-1">Please select a NFL Team to search.</p>
            <div className="r-flex">
                <SearchBox />
                <FormControlLabel
                    className="text-white"
                    control={
                        <Switch
                            className="text-white ml-1"
                            checked={props.seasonVsHistory}
                            onClick={handleChangeToHistory}
                            // value="checkedB"
                            color="primary"
                        />
                    }
                    label="Historical"
                />
                <Button onClick={handleSearchTeam} variant='contained' className='no-underline color-main'>Search</Button>
            </div>
        </div>
    )

};

const mapStateToProps = state => {
    return {
        teams: state.teams,
        currentTeam: state.currentTeam,
        wins: state.wins,
        history: state.history,
        seasonVsHistory: state.seasonOrHistory,
        showTable: state.showTable
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeToHistory: event => {
            console.log(event.target.checked);
            dispatch({type: dispatchState.toggleHistory, val: event.target.checked})
        },
        showTable: value => {
            dispatch({type: dispatchState.showTable, val: value});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);