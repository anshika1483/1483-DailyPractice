import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Login, Register, AddClient } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Switch>
        <Route path="/" component={Navbar} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Header} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/client" component={AddClient} />
      </Switch>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  </div>
);

export default App;
