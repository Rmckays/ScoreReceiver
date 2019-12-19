import React, {useEffect} from 'react';
import agent from '../API/agent';
import {connect} from "react-redux";

const SearchInput = props => {
    useEffect(() => {
        agent.teams.getTeams()
            .then(response => props.loadTeams(response))
    }, [])

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