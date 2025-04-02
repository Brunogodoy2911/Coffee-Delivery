import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 6.5rem;
  width: 100%;

  background: ${(props) => props.theme.background};

  padding-inline: 10rem;
  z-index: 1;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  width: 9rem;
  height: 2.375rem;

  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple"]};
  border-radius: 6px;

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const CartContainer = styled.div`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
`;

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.25rem;
  width: 1.25rem;
  padding-top: 0.125rem;

  ${mixins.fonts.textXS}
  color: ${(props) => props.theme.white};

  position: absolute;
  background: ${(props) => props.theme["yellow-dark"]};
  border-radius: 999px;

  transform: translate(16px, -16px);
`;
