import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  min-height: 23.25rem;
  max-height: 29rem;

  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    p {
      ${mixins.fonts.textS}
      color: #E63946;
    }
  }
`;

export const HeaderForm = styled.header`
  display: flex;

  gap: 0.5rem;
  margin-bottom: 2rem;

  color: ${(props) => props.theme["yellow-dark"]};

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

export const BaseInput = styled.input`
  border: 1px solid ${(props) => props.theme["base-button"]};
  ${mixins.fonts.textS}
  color: ${(props) => props.theme["base-text"]};

  height: 2.625rem;
  padding: 0.75rem;

  border-radius: 4px;
  background: ${(props) => props.theme["base-input"]};

  transition: border 0.2s;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CEPInput = styled(BaseInput)`
  width: 12.5rem;
`;

export const RoadInput = styled(BaseInput)`
  width: 35rem;
`;

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
`;

export const ComplementInputWrapper = styled.div`
  position: relative;
  width: 21.75rem;
`;

export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
`;

export const OptionalText = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);

  font-family: "Roboto" sans-serif;
  font-size: 0.75rem;
  font-style: italic;

  color: ${(props) => props.theme["base-label"]};
  pointer-events: none;
`;

export const NeighborhoodInput = styled(BaseInput)`
  width: 12.5rem;
`;

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
`;

export const UFInput = styled(BaseInput)`
  width: 3.75rem;
`;
