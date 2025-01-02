import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import {contactInfo} from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import Wobble from "react-reveal";
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: 7
  },
}));
export default function GithubProfileCard({ prof }) {
  const classes = useStyles();

  if (prof.hireable !== null) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">

      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me! </h1>
        <div className="row">
          <div className="main-content-profile">
            <Wobble>
              <div style={{
                margin: ' 50px auto',
                flexWrap: ' wrap',
                width: 'auto',
                boxShadow: '2px 3px 15px #ccc',
                padding: '15px 10px',
                height: '200px'
              }}>

                <Paper className={classes.paper}>

                  <h1 className="bio-text">{"Ali Hassan"}</h1>
                  <center>
                    <span style={{ padding: '23px', objectFit: "contain", maxWidth: "100%", height: 'auto' }} className="wave-emoji">{emoji("☎")}</span>
                    <a
                    className="contact-detail"
                    /*no-useless-concat*/
                    href={`tel: +92-3001326512`}
                  >
                      +92-3001326512
                  </a>
                  </center>
                </Paper>
                <SocialMedia />
              </div>
            </Wobble>
            {/* <div className="opp-div">
              <span className="desc-prof">Open for opportunities: {prof.hireable}</span>
            </div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
