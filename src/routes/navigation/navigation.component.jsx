import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, Logo, NavLinks, NavLink } from "./navigation.styles";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);

 

  return (
    <Fragment>
      <NavigationContainer>
        <Logo to={"/"}>
          
            <strong>Crave</strong>Waves
          
        </Logo>

        <NavLinks>
          <NavLink to={"/menu"}>
            Menu
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <>
              <NavLink to={"/sign-in"}>
                Sign In
              </NavLink>
              <NavLink to={"/sign-up"}>
                Sign Up
              </NavLink>
            </>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
