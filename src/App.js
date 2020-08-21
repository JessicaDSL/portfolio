import React from 'react';


import ContactPages from './pages/ContactPages';
import Header from './components/Header';
import HomePages from './pages/HomePages';
import LayoutPages from './pages/LayoutPages';


function App() {
  return (
    <div className="App">
      <ContactPages />
      <Header />
      <HomePages />
      <LayoutPages />
    </div>
  );
}

export default App;
