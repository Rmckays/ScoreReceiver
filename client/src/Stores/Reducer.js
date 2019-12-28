import initialState from "./AppState";
import * as dispatchState from './actionTypes';


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case dispatchState.loadTeams:

            return {
                ...state,
                teams: action.val
            };

        case dispatchState.teamChange:
            return {
                ...state,
                currentTeam: action.val
            };

        case dispatchState.loadTeamWins:

            return {
                ...state,
                wins: action.val
            };

        case dispatchState.loadTeamLosses:

            return {
                ...state,
                losses: action.val
            };

        case dispatchState.toggleHistory:
            const toggled = action.val;

            return {
                ...state,
                seasonOrHistory: toggled
            };

        case dispatchState.showTable:
            return{
                ...state,
                showTable: action.val
            };

        case dispatchState.changeSeason:
            return {
                ...state,
                season: action.val
            };

        case dispatchState.changeYear:
            return {
                ...state,
                year: action.val
            };

        case dispatchState.searchTeam:


    }
    console.log(state);
    return state;
};

export default reducer;