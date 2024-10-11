import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationDesktopContainer,
  Logo,
  NavLinks,
  NavLink,
} from "./nav-desktop.styles";

const NavDesktop = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <NavigationDesktopContainer>
      <Logo to={"/"}>
        CraveWaves
      </Logo>

      <NavLinks>
        <NavLink to={"/menu"}>Menu</NavLink>
        {currentUser ? (
          <NavLink as="span" onClick={signOutUser}>
            Sign Out
          </NavLink>
        ) : (
          <>
            <NavLink to={"/sign-in"}>Sign In</NavLink>
            <NavLink to={"/sign-up"}>Sign Up</NavLink>
          </>
        )}
        <CartIcon />
      </NavLinks>

      {isCartOpen && <CartDropdown />}
    </NavigationDesktopContainer>
  );
};

export default NavDesktop;
