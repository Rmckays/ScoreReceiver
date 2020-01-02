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
import agent from "../API/agent";
import * as dispatchState from '../Stores/actionTypes';
import ChartModal from "./Modal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DenseTable = props => {
  const classes = useStyles();

  useEffect(() => {
      if(props.seasonOrHistory) {
          agent.getStats.getTeamHistory(props.currentTeam, props.year)
                .then(response => {
                    console.log(response);
                    props.loadGames(response.games);
                })
      } else {
          agent.getStats.getTeamSeason(props.currentTeam, props.season)
              .then(response => {
                  console.log(response);
                  props.loadGames(response.games);
              })
      }
  }, [props.currentTeam, props.season, props.year, props.seasonOrHistory]);

  return (
      <Container>
          <Container component={Paper} className='mt-2 scrollY'>
              <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell align="right">Season</TableCell>
                          <TableCell align="right">Home Team</TableCell>
                          <TableCell align="right">Score</TableCell>
                          <TableCell align="right">Away Team</TableCell>
                          <TableCell align="right">Score</TableCell>
                          <TableCell align="right">Result</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {props.games.map(row => (
                          <TableRow key={row[0]}>
                              <TableCell component="th" scope="row">
                                {row.date}
                              </TableCell>
                              <TableCell align="right">{row.season}</TableCell>
                              <TableCell align="right">{row.home_team}</TableCell>
                              <TableCell align="right">{row.home_score}</TableCell>
                              <TableCell align="right">{row.away_team}</TableCell>
                              <TableCell align="right">{row.away_score}</TableCell>
                              <TableCell align="right">{row.result}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </Container>
          <ChartModal />
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
        history: state.history,
        games: state.games
    }
};

const mapDispatchToProps = dispatch => {
    return {
      loadGames: games => {
          dispatch({type: dispatchState.loadGames, val: games})
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DenseTable);