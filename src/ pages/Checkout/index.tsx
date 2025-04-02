import { CardPaymentMethod } from "./components/CardPaymentMethod";
import { Cart } from "./components/Cart";
import { FormOrder } from "./components/FormOrder";
import { CheckoutContainer, Wrapper } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Wrapper>
        <p>Complete seu pedido</p>

        <FormOrder />

        <CardPaymentMethod />
      </Wrapper>

      <Wrapper>
        <p>Cafés selecionados</p>

        <Cart />
      </Wrapper>
    </CheckoutContainer>
  );
}
