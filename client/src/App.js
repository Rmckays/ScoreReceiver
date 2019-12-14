import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./Containers/Pages/Home";

function App() {
  return (
      <BrowserRouter>
           <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
           </div>
      </BrowserRouter>
  );
}

export default App;
