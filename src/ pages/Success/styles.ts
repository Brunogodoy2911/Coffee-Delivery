import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export type ContainerIconStyles = "purple" | "yellow" | "yellow-dark";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  gap: 6.375rem;

  img {
    padding-top: 6.25rem;
  }
`;

export const SuccessHeader = styled.header`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["yellow-dark"]};
  }

  h2 {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 2.5rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    max-width: 18rem;
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ContainerIcon = styled.span<{ $variant: ContainerIconStyles }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  border-radius: 1000px;
  background: ${(props) =>
    props.$variant === "purple"
      ? props.theme.purple
      : props.$variant === "yellow"
        ? props.theme.yellow
        : props.theme["yellow-dark"]};

  svg {
    color: ${(props) => props.theme.background};
  }
`;
