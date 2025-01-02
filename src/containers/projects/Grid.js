import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: "flex",
    justifyContent: "center", // Center align grid items horizontally
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Add shadow effect
    transition: "transform 0.3s", // Add transition for raising effect
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      transform: "translateY(-5px)", // Slightly raise the box on hover
    },
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s", // Add transition for button background color
    "&:hover": {
      backgroundColor: theme.palette.primary.dark, // Darken background color on hover
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  },
  image: {
    width: "90px",
    height: "90px",
    transition: "transform 0.3s", // Add transition for image scale
    "&:hover": {
      transform: "scale(1.1)", // Enlarge image slightly on hover
    },
  },
}));
export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade left duration={1000}>
        <Grid className={classes.grid} container spacing={2}>
          {/* project 1 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">AshCart</h1>
              <p className="project-desc">Shopping web App</p>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://product-selling.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Alihassan079/Product-Selling"
                  target="_blank"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </span>
            </Paper>
          </Grid>
          {/* project 2 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">Wheel-Alignment</h1>
              <p className="project-desc">Traning Web App (LMS)</p>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://devstags.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Alihassan079/Wheel-Alignment"
                  target="_blank"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </span>
            </Paper>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">ExoticBirds</h1>
              <p className="project-desc">Birds Selling Web App</p>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://exoticbirds.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Alihassan079/Exotic-Birds-website"
                  target="_blank"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </span>
            </Paper>
          </Grid>
          {/* project 4 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">ServingHumanity</h1>
              <p className="project-desc">Charity Web App</p>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <a
                  href="https://charity-app-cyan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Alihassan079/Charity-App"
                  target="_blank"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
              </span>
            </Paper>
          </Grid>
          {/* project 5 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">TastyBurger</h1>
              <p className="project-desc">Food Web App</p>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://food-app-virid.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Alihassan079/Food-App"
                  target="_blank"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </span>
            </Paper>
          </Grid>
          {/* project 6 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">E Commerce</h1>
              <p className="project-desc">Shopping Web App</p>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <a
                  href="https://ecommerce-app-theta-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Alihassan079/Ecommerce-App"
                  target="_blank"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
              </span>
            </Paper>
          </Grid>

          {/* project 7 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">Image-Search-Engine</h1>
              <p className="project-desc">Search Google Images</p>

              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://image-search-engine-drab-nine.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  href="https://github.com/Alihassan079/Image-Search-Engine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </span>
            </Paper>
          </Grid>
          {/* project 8 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">Notes Web App</h1>
              <p className="project-desc">Create Your Notes</p>
              <center
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://notes-app-sigma-lime.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  href="https://github.com/Alihassan079/Notes-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </center>
            </Paper>
          </Grid>
          {/* project 9 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">Age Calculator</h1>
              <p className="project-desc">Calculate Your Age</p>
              <center
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://age-calculator-nine-blue.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  href="https://github.com/Alihassan079/Age-Calculator-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </center>
            </Paper>
          </Grid>
          {/* project 10 */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h1 className="project-title">OrignalNews</h1>
              <p className="project-desc">News Web App</p>
              <center
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <span> */}
                <a
                  href="https://news-app-cyan-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  href="https://github.com/Alihassan079/News-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="img" width="90px" height="90px" src="/git.png" />
                </a>
                {/* </span> */}
              </center>
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}
