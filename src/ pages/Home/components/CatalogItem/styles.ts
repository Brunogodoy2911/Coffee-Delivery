import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  padding-bottom: 1.25rem;
  margin-right: 2rem;
  margin-bottom: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    transform: translateY(-1.25rem);
  }

  h1 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme["base-subtitle"]};

    margin-top: 1.25rem;
  }

  h2 {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-label"]};
    text-align: center;

    max-width: 13.5rem;
    margin-top: 0.5rem;
    margin-bottom: 2.06rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.875;
  height: 1.312rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;

  border-radius: 100px;
  background: ${(props) => props.theme["yellow-light"]};

  p {
    ${mixins.fonts.tag}
    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
  }
`;

export const BuyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.43rem;

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-text"]};

    strong {
      ${mixins.fonts.titleM}
      padding-left: 0.25rem;
    }
  }
`;

export const BuyActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};

  transition: background 0.2s;
  &:hover {
    background: ${(props) => props.theme.purple};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
