import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllJobs from "./Pages/Public/AllJobs/AllJobs";
import Home from "./Pages/Public/Home/Home";
import Login from "./Pages/Public/LogIn/Login";
import SignUp from "./Pages/Public/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/" component={Home}/>
          
         <Route path="/allJobs" component={AllJobs}/>

         <Route path="/login" component={Login}/>
         
         <Route path="/signup" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
