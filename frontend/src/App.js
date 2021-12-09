import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Georgia from "./components/Georgia";
import Alabama from "./components/Alabama";
import SanJose from './components/SanJose'
import Spot from "./components/SingleSpot";
import CreateListing from "./components/CreateListing";
import EditListing from "./components/EditListing";
import AllSpots from "./components/Allspots";
import SearchResultSpots from "./components/SearchResultSpots";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/georgia'>
            <Georgia />
          </Route>
          <Route path='/alabama'>
            <Alabama />
          </Route>
          <Route path='/sanjose'>
            <SanJose />
          </Route>
          <Route path='/spot/:id'>
            <Spot />
          </Route>
          <Route path='/createlisting'>
            <CreateListing />
          </Route>
          <Route path='/editlisting/:id'>
            <EditListing isLoaded={isLoaded} />
          </Route>
          <Route exact path='/allspots'>
            <AllSpots />
          </Route>
          <Route path='/allspots/:searchTerm'>
            <SearchResultSpots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
