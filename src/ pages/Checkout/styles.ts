import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CheckoutContainer = styled.div`
  display: flex;

  width: 70rem;
  gap: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.93rem;
  margin-top: 2.56rem;

  > p:first-of-type {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
