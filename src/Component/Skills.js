import React from "react";
import js from "./images/js.jpeg";
import react from "./images/react_logo.jpeg";
import git from "./images/git.jpeg";
import JIRA from "./images/Jira.jpeg";
import docker from "./images/docker.jpeg";
import { useNavigate } from "react-router";
function Skills() {
  return (
    <>
      <h1 className="skills mt-5">Top Skills</h1>

      <div className="row pb-3">
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 w-full mt-3">
          <div class="card skills_card">
            <img src={js} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
             </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 w-full mt-3">
          <div class="card skills_card" >
            <img src={react} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
             </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 w-full mt-3">
          <div class="card skills_card" >
            <img src={git} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
             </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 w-full mt-3">
          <div class="card skills_card" >
            <img src={JIRA} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
