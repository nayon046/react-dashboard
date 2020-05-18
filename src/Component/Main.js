import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Customers from './Pages/Customers';


const Main = (props) => (
   <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />;
            <Route  path="/customers" component={Customers} />;
        </Switch>
    </Router>
)

export default Main;