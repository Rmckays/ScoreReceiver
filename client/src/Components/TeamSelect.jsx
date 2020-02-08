import React, {useEffect} from 'react';
import agent from "../API/agent";
import * as dispatchState from "../Stores/actionTypes";
import {connect} from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {getTeamName} from "../Util/teamNames";


const TeamSelect = props => {
    useEffect(() => {
        agent.teams.getTeams()
            .then(response => {
                props.loadTeams(response.teams);
            })

    }, []);

    const handleChange = event => {
        console.log(event.target.value);
        props.changeTeam(event.target.value);
    };

    const teamList = props.teams.map(team => {
        return(
            <MenuItem value={team}>{team} - {getTeamName(team)}</MenuItem>
        )
    });

    return (
        <Select
            className="bg-white w-1 my-2r"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
        >
            {teamList}
        </Select>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelect)