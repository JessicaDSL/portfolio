import Pokedex from "../../assets/image/Portfolio/pokedex.png";
import GoJessyStore from "../../assets/image/Portfolio/gojessyy.png";
import TodoList from '../../assets/image/Portfolio/todolist.png'

export const projects = [
  {
    id: 1,
    name: "Pokedex",
    subtitle: "Projeto focado no estudo do consumo de API",
    url: "https://jessicadsl.github.io/pokeProject/",
    image: Pokedex,
    infoproject:
      "Este projeto é uma plataforma para listar e visualizar pokemons, foi criado para estudar o consumo de APIs, passar props para componentes, ReactJS, react-router-dom, material-UI, styled-components e layout responsivo, adicionar pokemons à lista, tem uma lista de pokémons favoritos e uma página com mais detalhes sobre o pokémon escolhido clicando na imagem. de cada pokémon na API não são precisos, o motivo disso é que não tenho na api a base para o cálculo de cada espécie, pois existem várias espécies, foi necessário limitar essa informação.",
  },
  {
    id: 2,
    name: "GoJessyStore",
    subtitle: "Context API",
    url: "https://jessicadsl.github.io/ecommercenewproject/",
    image: GoJessyStore,
    infoproject:
      "O e-commerce funciona como uma loja virtual e representa um canal de vendas online para as empresas. Permitindo assim ao lojista comercializar seus produtos através de um site exclusivo. Alguns vendedores utilizam o e-commerce como fonte alternativa de vendas, associando-o à loja física. Uma infinidade de mercadorias pode ser vendida por meio de e-commerces, que abrangem praticamente todo tipo de categoria. Alguns sites de e-commerce brasileiros de destaque são Amaro, Boticário e Reserva. Este projeto é um aplicativo de carrinho de compras para um e-commerce de tênis, um projeto em React, responsivo e de alta performance. Ele foi criado para aprender o uso da Context API, para que pudesse realizar as seguintes funções: Adicionar um novo produto ao carrinho, retirar um produto do carrinho, alterar a quantidade de um produto no carrinho, calcular a sub- preços totais e totais do carrinho, exibição de mensagens de erro e sucesso. Tecnologias usadas: ReactJS, Yarn, Axios, React-Toastify, Styled-components, Styled-media-query, Context API, layout responsivo.",
  },
  {
    id: 3,
    name: "Todo-List",
    subtitle: "Modal && Context API",
    url: "https://jessicadsl.github.io/todolist/",
    image: TodoList,
    infoproject:
      "Esse projeto se trata de um TodoList, um aplicativo onde voce pode anotar tarefas, marcar parar fazer, informar que esta realizando, que está completa, ou até mesmo deletá-la da lista, esse projeto foi criado para aplicar conhecimentos em gerenciar estados através de Hooks, utilizando um Modal criado na Home do Projeto, e atráves de useContext, informar dados da lista, atualizar os dados de cada item da lista e remover o item. Para aplicar os conhecimentos foram utilizadas as seguintes tecnologias: ReactJS, Context-API, Styled-Components, material-UI, uuid, react-toastify.",
  },
];
