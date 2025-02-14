import { useState } from "react";
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import {
  CoffeeContainer,
  CoffeeList,
  HomeContainer,
  Intro,
  Item,
  Items,
  List,
  PackageContainer,
  ShoppingCartContainer,
  Subtitle,
  TimerContainer,
  Title,
  Wrapper,
  WrapperTitle,
} from "./styles";

import IntroImage from "../../assets/IntroImage.svg";

import { CardCoffee } from "./components/CoffeeCard";

import { coffeeListData } from "../../data/coffeeList";

export function Home() {
  const [coffeeList, setCoffeeList] = useState(coffeeListData);

  return (
    <HomeContainer>
      <Intro>
        <Wrapper>
          <WrapperTitle>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
          </WrapperTitle>

          <Items>
            <Item>
              <ShoppingCartContainer>
                <ShoppingCartSimple size={16} weight="fill" />
              </ShoppingCartContainer>
              <p>Compra simples e segura</p>
            </Item>

            <Item>
              <PackageContainer>
                <Package size={16} weight="fill" />
              </PackageContainer>
              <p>Embalagem mantém o café intacto</p>
            </Item>

            <Item>
              <TimerContainer>
                <Timer size={16} weight="fill" />
              </TimerContainer>
              <p>Entrega rápida e rastreada</p>
            </Item>

            <Item>
              <CoffeeContainer>
                <Coffee size={16} weight="fill" />
              </CoffeeContainer>
              <p>O café chega fresquinho até você</p>
            </Item>
          </Items>
        </Wrapper>

        <img src={IntroImage} alt="Café do Coffee Delivery" />
      </Intro>

      <CoffeeList>
        <p>Nossos cafés</p>

        <List>
          {coffeeList.map((coffee, index) => {
            return (
              <CardCoffee
                key={index}
                image={coffee.image}
                tags={coffee.tags}
                title={coffee.title}
                content={coffee.content}
                price={coffee.price}
              />
            );
          })}
        </List>
      </CoffeeList>
    </HomeContainer>
  );
}
