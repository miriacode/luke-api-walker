import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from './components/Form/Form';
import Category from './components/Category/Category';
import People from './components/People/People';

function App() {
  return(
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Form></Form>
        <Switch>
          <Route path="/:id" exact render={(routeProps) => <People {...routeProps}/>} />
          <Route path="/:category/:id" exact render={(routeProps) => <Category {...routeProps}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
