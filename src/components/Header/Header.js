import React from "react";

import { Link } from "react-router-dom";

// import { Container } from './styles';

const Header = () => {
  return (
    <div>
      <button>
        <Link to={`/`}>HOME</Link>
      </button>
      <button>
        <Link to={`/layout-page`}>LAYOUTS</Link>
      </button>
      <button>
        <Link to={`/contact-page`}>CONTACT</Link>
      </button>
    </div>
  );
};

export default Header;
