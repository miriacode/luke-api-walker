import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from './components/Form/Form';
import People from './components/People/People';

function App() {
  return(
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Form></Form>
        <Switch>
          <Route path="/people/:id" exact render={(routeProps) => <People {...routeProps}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
