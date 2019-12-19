import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = response => response.data;

const requests = {
    get: url => axios.get(url).then(responseBody)
};

const getStats = {
    getTeamHistory: (team, year) => requests.get(`/history/${team}/${year}`),
    getTeamSeason: (team, season) => requests.get(`/season/${team}/${season}`)
};

const teams = {
    getTeams: value => requests.get(`/teams`)
};

export default {
    getStats,
    teams
}

