import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  width: 70rem;
  padding-bottom: 8.875rem;
`;

export const Intro = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 34rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 36.75rem;

  gap: 1rem;
  margin-bottom: 4.125rem;
`;

export const Title = styled.p`
  ${mixins.fonts.titleXL}
  color: ${(props) => props.theme["base-title"]};
`;

export const Subtitle = styled.p`
  ${mixins.fonts.textL}
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Items = styled.div`
  display: flex;

  width: 40rem;

  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 2.5rem;
  margin-bottom: 1.25rem;
  gap: 0.75rem;

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const BaseIconContainer = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.background};
  border-radius: 999px;
`;

export const ShoppingCartContainer = styled(BaseIconContainer)`
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const PackageContainer = styled(BaseIconContainer)`
  background: ${(props) => props.theme["base-text"]};
`;
export const TimerContainer = styled(BaseIconContainer)`
  background: ${(props) => props.theme.yellow};
`;

export const CoffeeContainer = styled(BaseIconContainer)`
  background: ${(props) => props.theme.purple};
`;

export const CoffeeList = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  flex-wrap: wrap;

  p {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
    align-self: flex-start;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;

  width: 72rem;

  flex-wrap: wrap;
`;
