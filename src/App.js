import React from 'react';
import './App.css';
import Header from './components/header'; // Import correct de Header
import Section from './components/section';
import Preloader from './components/preloader';
function App() {
  return (
    <div className="App">
     <Header />
     <Section/>
     <Preloader/>
    </div>
  );
}

export default App;
