import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import { loginUser } from "../../store/session";

import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  // const dispatch = useDispatch();
  // const history = useHistory();

  let sessionLinks;

  if (sessionUser) sessionLinks = <ProfileButton user={sessionUser} />;

  else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="nav-link">Log In</NavLink>
        <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div  className="nav-container">
      <ul>
        <li>
          {isLoaded && sessionLinks}
          <NavLink className="nav-link" exact to="/">
            TravelHack
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
