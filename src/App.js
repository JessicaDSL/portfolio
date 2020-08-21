import React from 'react';


import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';


function App() {
  return (
    <div className="App">
      <Header />
      <ContactPage />
      <HomePage />
      <LayoutPage />
    </div>
  );
}

export default App;
