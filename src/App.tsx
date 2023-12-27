import React from 'react';
import background from './annie-spratt-wood-horizontal.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={background} className="hero-logo" alt="wood hero image" />
        <p>
          Tony Hester
        </p>
      </header>
    </div>
  );
}

export default App;
