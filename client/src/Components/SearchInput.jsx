import React, {useEffect} from 'react';
import agent from '../API/agent';
import {connect} from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import * as dispatchState from "../Stores/actionTypes";
import {getTeamName} from '../Util/teamNames';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";

const SearchInput = (props) => {

    useEffect(() => {
        agent.teams.getTeams()
            .then(response => {
                console.log(response.teams);
                props.loadTeams(response.teams);
            })
    }, []);

    const handleChange = event => {
        console.log(event.target.value);
        props.changeTeam(event.target.value);
    };

    const handleChangeToHistory = event => {
        props.changeToHistory(event);
    };

    const handleSearchTeam = () => {
        props.showTable(true);

        if(props.seasonVsHistory){
            agent.getStats.getTeamHistory(props.currentTeam, props.year)
                .then()
        }else{

        }
    }

    const teamList = props.teams.map(team => {
        return(
            <MenuItem value={team}>{team} - {getTeamName(team)}</MenuItem>
        )
    });

    return (
        <div className='searchInput mt-1 '>
            <p className="text-white f-1">Please select a NFL Team to search.</p>
            <div className="r-flex">
                <Select
                    className="bg-white w-1"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                >
                    {teamList}
                </Select>
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
        loadTeams: (teams) => {
            dispatch({type:dispatchState.loadTeams, val: teams})
        },
        changeTeam: team => {
            dispatch({type:dispatchState.teamChange, val: team})
        },
        changeToHistory: event => {
            console.log(event.target.checked);
            console.log(!event.target.checked);
            dispatch({type: dispatchState.toggleHistory, val: event.target.checked})
        },
        searchTeam: teamData => {
            dispatch({type: dispatchState.searchTeam, val: teamData});
        },
        showTable: value => {
            dispatch({type: dispatchState.showTable, val: value});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);