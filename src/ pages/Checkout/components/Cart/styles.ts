import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
`;

export const Divider = styled.span`
  width: 100%;
  border: 1px solid ${(props) => props.theme["base-button"]};
`;

export const Itens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 14.75rem;
  max-height: 14.75rem;
  overflow-y: auto;
  overflow-x: hidden;

  li {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    list-style: none;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyList = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  p {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme["base-title"]};
  }

  svg {
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-text"]};
  }

  p:last-of-type {
    ${mixins.fonts.textM}
  }

  h1 {
    ${mixins.fonts.boldL}
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }
`;

export const ButtonConfirmOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.875rem;

  border-radius: 6px;
  background: ${(props) => props.theme.yellow};

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  p {
    ${mixins.fonts.buttonG}
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
  }
`;
