import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';
// import NavBarContainer from './components/nav/navbar_container';
import CreateWorkOutContainer from './components/workoutplan/workoutplan_form_container';
import MainPage from './components/main/main_page';
import HomePage from './components/home/home_page_container';
import WorkoutPlanShow from './components/workoutplan/workoutplan_show_container';

const App = () => (
  <div className="liftur-main-ui">
    <Switch>
      <ProtectedRoute path="/home" component={HomePage}/>
      <ProtectedRoute path="/create" component={CreateWorkOutContainer}/>
      <ProtectedRoute path="/workoutPlan/:workoutPlanId" component={WorkoutPlanShow}/>
      <AuthRoute path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;