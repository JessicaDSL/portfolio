import React from "react";
import { FaSearch } from "react-icons/fa";

import { list } from "./content";
import { Container, Content, List, ListItem, Nav, Hr } from "./styles";
import HeroLogo from '../HeroLogo';
import HeaderSearch from "../HeaderSearch";
import HeaderNav from "../HeaderNav";

const HeaderSection = () => {
  return (
    <Container>
      <Content>
        
        <HeaderSearch />
        <span>
          <FaSearch />
        </span>
        
        <div>
        <hr
          style={{
            width: 1270,
            align: "bottom",
            height: 2,
            color: 595959,
          }}
        />
        </div>
      </Content>

      <HeroLogo />

      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <a href={item.url}>
              {item.icon}
              <b>{item.label}</b>
              <hr
                style={{
                  width: 2,
                  align: "left",
                  height: 65,
                  color: 595959,
                }}
              />
            </a>
          </ListItem>
        ))}
      </List>

      

      <HeaderNav />
    </Container>
  );
};

export default HeaderSection;
