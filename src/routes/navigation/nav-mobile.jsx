import { useClickAway } from "react-use";
import { useState,useRef } from "react";
import { useSelector, } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { Squeeze as Hamburger } from "hamburger-react";

import {
  MobileMenuContainer,
  HamburgerContainer,
  NavLinksDropdown,
  Logo,
  NavLinks,
  NavLink,
} from "./nav-mobile.styles";

const NavMobile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);
  
  useClickAway(ref, () => setDropdownOpen(false));

  

  return (
    <MobileMenuContainer ref={ref}>
      <HamburgerContainer>
        <Hamburger
          toggled={isDropdownOpen}
          size={20}
          toggle={setDropdownOpen}
        />
        <Logo to={"/"}>CraveWaves</Logo>
        <CartIcon />
      </HamburgerContainer>
      {isCartOpen && <CartDropdown />}
      {isDropdownOpen && (
        <NavLinksDropdown>
          <NavLinks>
            <NavLink to={"/menu"}>Menu</NavLink>
            {currentUser ? (
              <>
              <NavLink to={"/checkout"}>Checkout</NavLink>
               <NavLink as="span" onClick={signOutUser}>
                 Sign Out
               </NavLink>
              
             </>
            ) : (
              <>
                <NavLink to={"/sign-in"}>Sign In</NavLink>
                <NavLink to={"/sign-up"}>Sign Up</NavLink>
              </>
            )}
          </NavLinks>
        </NavLinksDropdown>
      )}
    </MobileMenuContainer>
  );
};

export default NavMobile;
