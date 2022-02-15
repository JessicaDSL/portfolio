import React from "react";
import { Container } from "./styles";

const Project = ({ projectData }) => {
  console.log(projectData)
  return (
    <Container>
      <h2>{projectData.name}</h2>
      <span>
        <hr />
        {projectData.subtitle}
      </span>
      <p>
        {projectData.infoproject}
      </p>
      <a href={`${projectData.url}`} target="_blank">
        <button>Link para o projeto</button>
      </a>
    </Container>
  );
};

export default Project;