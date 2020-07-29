import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cadastro from './pages/cadastro/Video'
import Categoria from './pages/cadastro/Categoria'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={Cadastro} exact />
      <Route path="/cadastro/categoria" component={Categoria} exact />
      <Route path="/" component={Home} exact />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

