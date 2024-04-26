import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={github} linkedin={linkedin} />
      function Links({ github, linkedin }) {
           return (
      <div>
          <h3>Links</h3>
          <a href={github}>{github}</a>
          <a href={linkedin}>{linkedin}</a>
      </div>
      
  );
}
    </div>
  );

}

export default About;
