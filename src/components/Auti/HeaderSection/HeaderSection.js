import React from "react";

import { Container } from "./styles";

const HeaderSection = () => {
  return (
    <Container>
      <div>
        <h1>Lets help?</h1>

        <p>
          Lorem <span>ipsum dolor</span> sit amet, <span>consectetur</span>{" "}
          adipiscing elit. Aenean in imperdiet erat. Fusce semper gravida enim
          quis faucibus. Nunc congue elit non sodales facilisis. Pellentesque eu
          sapien justo.
        </p>

        <p>
          Lorem
          <span>
            &nbsp;ipsum dolor sit amet, consecteturadipiscing elit. Aenean in
            imperdiet erat. Fusce semper enim quis faucibus.
          </span>
          Nunc congue elit non sodales facilisis. Pellentesque eu sapien justo.
        </p>

        <p>
          <span>Donec id mattis elit, vitae egestas magna!</span>
        </p>

        <button>SIGN AND HELP!</button>
      </div>
    </Container>
  );
};

export default HeaderSection;
