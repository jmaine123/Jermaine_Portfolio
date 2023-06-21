import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Grid } from "@material-ui/core";
import Jermaine_pic from '../images/Jermaine.png'

function Home() {
  return (
    <div className="home">
      <Grid container spacing={2} className="about">
        <Grid item xs={6} className="image">
            <img src={Jermaine_pic} className="main-image" alt=""/>
        </Grid>
        <Grid item xs={6} className="prompt">
            <h2> Hello, My Name is Jermaine Smikle</h2>
            <p>A Software Developer/ Data Analyst with a passion for learning and creating.</p>
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
        </Grid>
      </Grid>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Vue, Redux, HTML, CSS, React Hooks, NPM, BootStrap, MaterialUI, Yarn, Sass, Web Scraping, XPATH, jQuery, Regex
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Ruby on Rails, DJango, SQLite3, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Data Analysis</h2>
            <span>
              RStudio, MySQL, Pandas, Tableau, Data cleaning, Data Visualization, Data Management 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, Ruby, R, SQL, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;