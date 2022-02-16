import React from "react";
import { Container } from "./styles";

const Project = ({ projectData }) => {
  return (
    <Container>
      <h2>{projectData.name}</h2>
      <span>
        <hr />
        {projectData.subtitle}
      </span>
      <p>{projectData.infoproject}</p>
      <a href={`${projectData.url}`}>
        <button>Link to project</button>
      </a>
    </Container>
  );
};

export default Project;
