import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  return (
    // <BrowserRouter> //TODO использовать router-dom
    <HashRouter>
      <NavBar />
      <Helmet>
        <title>Как Для Себя</title>
        <meta
          name="description"
          content="Арендуй подходящие для тебя апартаменты в Санкт-Петербурге и его окрестностях"
        />
        <meta
          name="keywords"
          content="посуточно, квартира, насутки, сутки, апартаменты, номер, апартотель, номера, снять, загородом, загороднаяквартира, аренда, уютная, новая, девяткино, мурино, метро, студия"
        />
      </Helmet>
      <AppRouter />
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
