import React from "react";
import pic from "../../images/Kbear.jpg";

export default function About() {
  return (
    <div className="div1">
      <h1 id="top">About Me</h1>
      <br></br>
      <img src={pic} className="rounded-circle" id="avatar1" alt="..." />
      <br></br>
      <br></br>
      <p>
      Hello everyone I'm Krista! I love helping people.
<br />
 I'm a teacher at heart, from years of homeschooling to currently assiting at a school as a substitute teacher.
<br />
As a lifelong learner, I love inspring others to find learning fun.<br />
I'm passionate about health, and I encourage anyone who will listen to make the healthy choices that can improve their quality of life.<br />
      </p>
    </div>
  );
}
