import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

 

  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to={"/"}>
          <div className="logo">
            <strong>Crave</strong>Waves
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/menu"}>
            Menu
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ) : (
            <>
              <Link className="nav-link" to={"/sign-in"}>
                Sign In
              </Link>
              <Link className="nav-link" to={"/sign-up"}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
