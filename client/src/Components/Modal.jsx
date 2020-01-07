import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";
import ChartWrapper from "./ChartWrapper";
import {connect} from "react-redux";
import {getTeamName} from "../Util/teamNames";

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ChartModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-2">
      <Button variant='contained' className='no-underline text-white mt-2' color="primary" type="button" onClick={handleOpen}>
        View Stats
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Team Stats</h2>
            <div>
                <div><div className="legend-box bg-green"></div><div>{props.currentTeam} - {getTeamName(props.currentTeam)}</div></div>
              <div><div className="legend-box bg-red"></div><div>Opposition</div></div>
            </div>
            <ChartWrapper />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
    return {
        currentTeam: state.currentTeam,
    }
};


export default connect(mapStateToProps)(ChartModal);