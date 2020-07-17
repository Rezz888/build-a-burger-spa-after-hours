import React from 'react';
import { Route, Switch } from 'react-router-dom';

//NavBar
//HomePage
//BurgerForm

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/buildaburger'>
          <BurgerForm />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
