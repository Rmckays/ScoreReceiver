import React, {useEffect} from 'react';
import agent from '../API/agent';
import {connect} from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SearchInput = props => {
    useEffect(() => {
        agent.teams.getTeams()
            .then(response => props.loadTeams(response))
    }, []);

    const handleChange = event => {
        props.changeTeam(event);
    };

    const teamList = props.teams.map(team => {
        return(
            <MenuItem value={team}>{team}</MenuItem>
        )
    });

    return (
        <div className='searchInput'>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
            >
                {teamList}
            </Select>
        </div>
    )

};

const mapStateToProps = state => {
    return {
        teams: state.teams,
        currentTeam: state.currentTeam,
        wins: state.wins,
        history: state.history
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadTeams: () => {
            dispatch({type:"LOADTEAMS"})
        },
        changeTeam: event => {
            dispatch({type:"CHANGETEAM", val: event.target.value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(SearchInput);