import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";
import axios from 'axios';
import agent from "../API/agent";
import * as dispatchState from '../Stores/actionTypes';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DenseTable = props => {
  const classes = useStyles();

  useEffect(() => {
      // if(props.seasonVsHistory) {
      //     agent.getStats.getTeamHistory(props.currentTeam, props.year)
      //           .then(response => {
      //               console.log(response);
      //               props.loadTeamWins(response.wins);
      //               props.loadTeamLosses(response.losses);
      //           })
      // } else {
          agent.getStats.getTeamSeason(props.currentTeam, props.season)
              .then(response => {
                  console.log(response);
                  props.loadTeamWins(response.wins);
                  props.loadTeamLosses(response.losses);
              })
      // }
  }, [props.currentTeam]);

  return (
      <Container component={Paper} className='mt-2'>
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
      </Container>
  );
};

const mapStateToProps = state => {
    return {
        teams: state.teams,
        currentTeam: state.currentTeam,
        season: state.season,
        seasonOrHistory: state.seasonOrHistory,
        year: state.year,
        wins: state.wins,
        losses: state.losses,
        history: state.history,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(DenseTable);