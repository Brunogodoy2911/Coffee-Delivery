import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export type CounterPropsVariantsStyles = "CatalogItem" | "CartItem";

export const Container = styled.div<{ $variant: CounterPropsVariantsStyles }>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 4.5rem;
  height: ${(props) => (props.$variant === "CatalogItem" ? "2.375rem" : "2rem")};

  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;

  padding: 0.5rem;
  gap: 0.34rem;

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-title"]};
  }

  svg:hover {
    color: ${(props) => props.theme["purple-dark"]};
    cursor: pointer;
  }
`;
