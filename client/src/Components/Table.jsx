import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";

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
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
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
        wins: state.wins,
        history: state.history
    }
};

const mapDispatchToProps = dispatch => {
    return {
      loadSeason: games => {
        dispatch();
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DenseTable);