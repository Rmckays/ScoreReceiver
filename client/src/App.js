import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./Containers/Pages/Home";
import SearchTeam from "./Containers/Pages/SearchTeam";

function App() {
  return (
      <BrowserRouter>
           <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/search' component={SearchTeam} />
                </Switch>
           </div>
      </BrowserRouter>
  );
}

export default App;
