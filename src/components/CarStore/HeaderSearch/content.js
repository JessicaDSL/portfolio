import React from 'react';

import { FaUser, FaCartPlus, FaCheckCircle  } from 'react-icons/fa';

export const links = [
  {
    icon: <FaUser />,
    label: "My Account", 
    url: '#'
  },
  {
    icon: <FaCartPlus />,
    label: "Cart", 
    url: '#'
  },
  {
    icon: <FaCheckCircle />,
    label: "Checkout", 
    url: '#'
  }
]