import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Principal from './pages/Principal/Principal';
import Libro from './pages/Libro/Libro';
import { Route } from 'wouter';

function App() {
  

  return (
    <div className="App">
          <Route path='/'><Principal /></Route>
          <Route path='/libro'><Libro /></Route>
    </div>
  );
}

export default App;
