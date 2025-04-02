import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  height: 12.93rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  gap: 2rem;
  padding: 2.5rem;

  p {
    ${mixins.fonts.textS}
    color: #E63946;
  }
`;

export const HeaderCard = styled.header`
  display: flex;

  gap: 0.5rem;

  color: ${(props) => props.theme.purple};

  h1 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  h2 {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Column = styled.span`
  display: flex;
  flex-direction: column;

  gap: 0.125rem;
`;

export const Row = styled.span`
  display: flex;
  gap: 0.75rem;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  display: flex;

  align-items: center;
  gap: 0.75rem;
  padding-inline: 1rem;

  width: 11.18rem;
  height: 3.18rem;

  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;

  transition: background 0.2s;

  p {
    ${mixins.fonts.buttonM}
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  border: ${({ isSelected, theme }) =>
    isSelected ? `1px solid ${theme.purple}` : "0px"};
`;
