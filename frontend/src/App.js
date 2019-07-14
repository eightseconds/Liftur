import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './components/nav/navbar_container';

import MainPage from './components/main/main_page';
import HomePage from './components/home/home_page_container';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/home" component={HomePage}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;