import React from 'react';
import Showcase from './Components/Showcase';
import './App.css';
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Showcase/>
      <Navigation />
      <Footer/>
    </div>
  );
}

export default App;
