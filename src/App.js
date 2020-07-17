import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import BurgerForm from './components/BurgerForm';
import HomePage from './components/HomePage';

//NavBar
//HomePage
//BurgerForm

function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = order => {
    setOrders([...orders, order]);
  }

  return (
    <AppContainer>
      <NavBar />
      <Switch>
        <Route path='/buildaburger'>
          <BurgerForm addOrder={addOrder} />
        </Route>
        <Route exact path='/'>
          <HomePage orders={orders} />
        </Route>
      </Switch>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background: #000;
`

export default App;
