import { Route, Router, Switch } from "react-router-dom";
import { doLogin, doLogout } from "../actions/auth";

import Header from "./header";
import LoginPage from "./loginPage";
import PrivateRoute from "./privateRoute";
import React from "react";
import UserPage from "./userPage";
import { connect } from "react-redux";
import history from "../history/history";

const App = ({ auth, doLogin, doLogout }) => (
  <Router history={history}>
    
      <LoginPage doLogin={doLogin} doLogout={doLogout} auth={auth} />
      <Switch>
       
        <PrivateRoute  path="/dashboard" component={UserPage} auth={auth} />
        
      </Switch>
    
  </Router>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { doLogin, doLogout },)(App);
