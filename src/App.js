import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import BurgerForm from "./Components/BurgerForm";
import HomePage from "./Components/HomePage";
import styled from "styled-components";
// NavBar
// HomePage
// BurgerForm

function App() {
  return (

    <AppContainer>
      <NavBar />
      <Switch>
        <Route path='/buildaburger'>
          <BurgerForm />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </AppContainer>
  );
}

const AppContainer = styled.div`
    background: #000;
`

export default App;
