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
            }

    }
    console.log(state);
    return state;
};

export default reducer;