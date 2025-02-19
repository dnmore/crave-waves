import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationDesktopContainer,
  Logo,
  NavLinks,
  NavLink,
  Signout,
} from "./nav-desktop.styles";
import { useAppSelector } from "../../store/hooks";

const NavDesktop = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);

  return (
    <NavigationDesktopContainer>
      <Logo to={"/"}>CraveWaves</Logo>

      <NavLinks>
        <NavLink to={"/menu"}>Menu</NavLink>
        {currentUser ? (
          <>
            <NavLink to={"/checkout"}>Checkout</NavLink>
            <Signout onClick={signOutUser}>Sign Out</Signout>
          </>
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
