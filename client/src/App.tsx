import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <NavBar />
      <AppRouter />
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
