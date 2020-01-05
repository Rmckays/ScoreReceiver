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

        case dispatchState.loadGames:

            return {
                ...state,
                games: action.val
            }

        case dispatchState.toggleHistory:
            const toggled = action.val;

            return {
                ...state,
                seasonOrHistory: toggled,
                year: state.season
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

        case dispatchState.resetShowTable:
            return {
                ...state,
                showTable: action.val
            }
    }
    return state;
};

export default reducer;