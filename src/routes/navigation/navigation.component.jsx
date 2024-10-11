import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

const Navigation = () => {
  return (
    <Fragment>
      <NavDesktop />
      <NavMobile />

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
