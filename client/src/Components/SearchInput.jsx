import React, {useEffect, useState} from 'react';
import agent from '../API/agent';
import {connect} from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

const SearchInput = (props) => {

    useEffect(() => {
        axios.get('http://localhost:4000/api/teams')
            .then(response => {
                    console.log("From Axios");
                    console.log(response.data.teams);
                    props.loadTeams(response.data.teams);
                    console.log(props.teams);
                }
            )
        // agent.teams.getTeams()
        //     .then(response => {
        //         console.log(response.data);
        //         props.loadTeams(response);})
    }, []);

    // const handleChange = event => {
    //     props.changeTeam(event);
    // };

    const teamList = props.teams.map(team => {
        return(
            <MenuItem value={team}>{team}</MenuItem>
        )
    });

    return (
        <div className='searchInput pt-1'>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // onChange={handleChange}
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
        loadTeams: (teams) => {
            console.log("From Dispatch");
            console.log(teams);
            dispatch({type:"LOADTEAMS", val: teams})
        },
        changeTeam: event => {
            dispatch({type:"CHANGETEAM", val: event.target.value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);