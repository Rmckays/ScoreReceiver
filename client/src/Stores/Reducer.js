import initialState from "./AppState";
import * as dispatchState from './actionTypes';


const reducer = (state = initialState, action) => {
    console.log("From Reducer");
    console.log(action);
    switch (action.type) {
        case "LOADTEAMS":
            const newTeams = [...action.val];

            return {
                ...state,
                teams: [...newTeams]
            }

    }
    return state;
};

export default reducer;