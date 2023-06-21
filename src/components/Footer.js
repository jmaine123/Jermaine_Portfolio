import React from "react";
import "../styles/Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <LinkedInIcon />

      </div>
      <p> &copy; 2023 JermaineSmikle.com</p>
    </div>
  );
}

export default Footer;