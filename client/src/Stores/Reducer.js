import initialState from "./AppState";
import * as dispatchState from './actionTypes';


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case dispatchState.loadTeams:
            const newTeams = [...action.val];

            return {
                ...state,
                teams: [...newTeams]
            };

        case dispatchState.teamChange:
            return {
                ...state,
                currentTeam: action.val
            };

        case dispatchState.loadTeamWins:
            const teamWins = [...action.val];

            return {
                ...state,
                wins: [...teamWins]
            };

        case dispatchState.loadTeamLosses:
            const teamLosses = [...action.val];

            return {
                ...state,
                losses: [...teamLosses]
            };

        case dispatchState.toggleHistory:
            const toggled = action.val;

            return {
                ...state,
                seasonOrHistory: toggled
            };

        case dispatchState.showTable:
            return{
                state,
                showTable: action.val
            };

        case dispatchState.searchTeam:

    }
    console.log(state);
    return state;
};

export default reducer;