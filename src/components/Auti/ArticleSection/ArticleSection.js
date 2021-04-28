import React from "react";

import { list } from "./content";
import { Container, List, ListItem, Section } from "./styles";

const ArticleSection = () => {
  return (
    <Container>
      <div>
      <h2>
        <span>HOW IT</span>
      </h2>

      <h2>WORKS</h2>

      <hr />

      <Section>
        <List>
          {list.map((item, index) => (
            <ListItem key={index}>
              <b>{item.numbers}</b>
              <p>{item.descripition}</p>
            </ListItem>
          ))}
        </List>
        
        
      </Section>
      <button>SIGN AND HELP!</button>
      </div>
    </Container>
  );
};

export default ArticleSection;
