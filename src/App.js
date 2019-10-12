import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatlesComponent from './StatelesComponent';
import StatefulComponent from './StatefulComponent';

function App() {
  return (
    <div className="App">
      <h1>Componente principal</h1>
      <StatlesComponent/>
      <StatefulComponent/>
    </div>
  );
}

export default App;
