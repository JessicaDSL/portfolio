import Pokedex from "../../assets/image/Portfolio/pokedex.png";
import GoJessyStore from "../../assets/image/Portfolio/gojessyy.png";

export const projects = [
  {
    id: 1,
    name: "Pokedex",
    subtitle: "Project focused on working on API consumption",
    url: "https://jessicadsl.github.io/pokeProject/",
    image: Pokedex,
    infoproject:
      "This project is a platform for listing and viewing pokemons, it was created to study API consumption, pass props to components, ReactJS, react-router-dom, material-UI, styled-components, and responsive layout, add pokemons to the list, it has a list of favorite pokémons and a page with more details about the pokémon chosen by clicking on the image. of each pokémon in the API are not accurate, the reason for this is that I don't have in the api the basis for the calculation of each species, as there are several species, it was necessary to limit this information.",
  },
  {
    id: 2,
    name: "GoJessyStore",
    subtitle: "Context API",
    url: "https://jessicadsl.github.io/ecommercenewproject/",
    image: GoJessyStore,
    infoproject:
      "E-commerce works as a virtual store and represents an online sales channel for companies. Thus allowing the shopkeeper to market their products through an exclusive website. Some sellers use e-commerce as an alternative source of sales, associating it with the physical store. A multitude of goods can be sold through e-commerces, which cover practically every type of category. Some prominent Brazilian e-commerce sites are Amaro, Boticário and Reserva. This project is a shopping cart application for a tennis e-commerce, a project in React, responsive and highly performant. It was created to learn the use of the Context API, so that it could perform the following functions: Add a new product to the cart, remove a product from the cart, change the quantity of a product in the cart, calculate the sub-total and total prices of the cart, display of error and success messages. Technologies used: ReactJS, Yarn, Axios, React-Toastify, Styled-components, Styled-media-query, Context API, responsive layout.",
  },
];
