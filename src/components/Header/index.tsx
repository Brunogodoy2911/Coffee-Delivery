import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  CartContainer,
  Counter,
  HeaderContainer,
  LocationContainer,
} from "./styles";

import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";

export function Header() {
  const { items } = useContext(CartContext);

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout">
          <CartContainer>
            <ShoppingCart size={19} weight="fill" />
            {items.length > 0 && <Counter>{items.length}</Counter>}
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
