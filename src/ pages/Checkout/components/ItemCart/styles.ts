import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 23rem;
  height: 5rem;
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;

  background: ${(props) => props.theme["base-card"]};

  img {
    width: 4rem;
    height: 4rem;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  h1 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    ${mixins.fonts.boldM}
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Column = styled.span`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const Row = styled.span`
  display: flex;
  gap: 0.5rem;
`;

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  width: 5.68rem;
  height: 2rem;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  transition: background 0.2s;
  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    ${mixins.fonts.buttonM}
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;
