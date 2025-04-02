import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import {
  Column,
  ContainerIcon,
  Info,
  InfoContent,
  InfoItem,
  SuccessContainer,
  SuccessHeader,
} from "./styles";

import { FormOrderContext } from "../../contexts/Form/FormOrderContext";

import Illustration from "../../assets/Illustration.svg";

export function Success() {
  const { orderData } = useContext(FormOrderContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!orderData) {
      navigate("/");
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  return (
    <SuccessContainer>
      <Column>
        <SuccessHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </SuccessHeader>

        <Info>
          <InfoContent>
            <InfoItem>
              <ContainerIcon $variant="purple">
                <MapPin size={16} weight="fill" />
              </ContainerIcon>

              <p style={{ width: "19.375rem" }}>
                Entrega em{" "}
                <strong>
                  {orderData?.road}, {orderData?.number}{" "}
                </strong>
                {orderData?.neighborhood} - {orderData?.city}, {orderData?.uf}
              </p>
            </InfoItem>

            <InfoItem>
              <ContainerIcon $variant="yellow">
                <Timer size={16} weight="fill" />
              </ContainerIcon>

              <p style={{ width: "9rem" }}>
                Previsão de entrega <strong>20min - 30min</strong>
              </p>
            </InfoItem>

            <InfoItem>
              <ContainerIcon $variant="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </ContainerIcon>

              <p style={{ width: "10.2rem" }}>
                Pagamento na entrega{" "}
                <strong>{orderData?.selectedPaymentMethod}</strong>
              </p>
            </InfoItem>
          </InfoContent>
        </Info>
      </Column>

      <img
        src={Illustration}
        alt="Ilustração vetorial de um entregador pilotando uma scooter roxa com uma caixa de entrega marrom presa atrás. O entregador veste uma camisa amarela e calças verdes. Há linhas amarelas ao fundo indicando movimento, e uma planta verde aparece ao lado esquerdo"
      />
    </SuccessContainer>
  );
}
