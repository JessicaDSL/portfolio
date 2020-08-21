import React from 'react';


import Header from './components/Header';
import HomePages from './pages/HomePages';
import LayoutPages from './pages/LayoutPages';



function App() {
  return (
    <div className="App">

      <Header />
      <HomePages />
      <LayoutPages />

    </div>
  );
}

export default App;
