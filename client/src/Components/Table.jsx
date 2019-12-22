import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";
import agent from "../API/agent";
import * as dispatchState from '../Stores/actionTypes';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(date, season, homeTeam, homeScore, awayTeam, awayScore) {
//   return { date, season, homeTeam, homeScore, awayTeam, awayScore };
// }
//
// const rows = [
//   createData()
// ];

const DenseTable = props => {
  const classes = useStyles();

  useEffect(() => {
      agent.getStats.getTeamSeason(props.currentTeam, props.season)
          .then(response => {
              console.log(response);
              props.loadTeamWins(response.wins);
              props.loadTeamLosses(response.losses);
        })
  }, []);

  return (
      <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                  <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Season</TableCell>
                      <TableCell align="right">Home Team</TableCell>
                      <TableCell align="right">Score</TableCell>
                      <TableCell align="right">Away Team</TableCell>
                      <TableCell align="right">Score</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {props.wins.map(row => (
                      <TableRow key={row[0]}>
                          <TableCell component="th" scope="row">
                            {row[0]}
                          </TableCell>
                          <TableCell align="right">{row[1]}</TableCell>
                          <TableCell align="right">{row[4]}</TableCell>
                          <TableCell align="right">{row[9]}</TableCell>
                          <TableCell align="right">{row[5]}</TableCell>
                          <TableCell align="right">{row[10]}</TableCell>
                          <TableCell align="right">Win</TableCell>
                      </TableRow>
                  ))}
                  {props.losses.map(row => (
                      <TableRow key={row[0]}>
                          <TableCell component="th" scope="row">
                            {row[0]}
                          </TableCell>
                          <TableCell align="right">{row[1]}</TableCell>
                          <TableCell align="right">{row[4]}</TableCell>
                          <TableCell align="right">{row[9]}</TableCell>
                          <TableCell align="right">{row[5]}</TableCell>
                          <TableCell align="right">{row[10]}</TableCell>
                          <TableCell align="right">Loss</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  );
};

const mapStateToProps = state => {
    return {
        teams: state.teams,
        currentTeam: state.currentTeam,
        season: state.season,
        seasonVsHistory: state.seasonVsHistory,
        year: state.year,
        wins: state.wins,
        history: state.history
    }
};

const mapDispatchToProps = dispatch => {
    return {
      loadTeamWins: games => {
        dispatch({type: dispatchState.loadTeamWins, val: games});
      },
      loadTeamLosses: games => {
        dispatch({type: dispatchState.loadTeamLosses, val: games})
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DenseTable);