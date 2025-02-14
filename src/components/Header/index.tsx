import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  CartContainer,
  Counter,
  HeaderContainer,
  LocationContainer,
} from "./styles";

import Logo from "../../assets/Logo.svg";

export function Header() {
  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
  ];

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout" end>
          <CartContainer>
            <ShoppingCart size={19} weight="fill" />
            {products.length > 0 && <Counter>{products.length}</Counter>}
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
