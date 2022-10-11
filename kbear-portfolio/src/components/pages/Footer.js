import React from "react";
import LinkedIn from "../../images/107149_gray_circle_linkedin_icon.png";
import Gmail from "../../images/gmail-48.png";

const Footer = (props) => {
  return (
    <div className="footer">
      <br></br>
      <br></br>
      <div>
          <a className="hyperlink" href="https://www.linkedin.com/in/kristavaldovinos" rel= "noopener noreferrer" target="_blank"><img alt="..." src={LinkedIn}></img></a>
          <a className="hyperlink" href="mailto:kvaldovin@gmail.com"><img alt="..." src={Gmail}></img></a>
      </div>
    </div>
  );
};
export default Footer;
