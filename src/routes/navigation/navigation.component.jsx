import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);

 

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
