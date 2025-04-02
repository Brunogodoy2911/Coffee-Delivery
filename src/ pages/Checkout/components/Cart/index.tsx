import { useContext } from "react";
import { ShoppingCartSimple } from "phosphor-react";

import { ItemCart } from "../ItemCart/ index";

import {
  ButtonConfirmOrder,
  CartContainer,
  Divider,
  EmptyList,
  Itens,
  Row,
} from "./styles";

import { CartContext } from "../../../../contexts/Cart/CartContext";
import { FormOrderContext } from "../../../../contexts/Form/FormOrderContext";

export function Cart() {
  const {
    items,
    itemQuantities,
    totalProductPriceFormatted,
    freightFormatted,
    totalPriceFormatted,
  } = useContext(CartContext);
  const { handleSubmit, onSubmit } = useContext(FormOrderContext);

  const disableButtonConfirmOrder = items.length === 0;

  return (
    <CartContainer>
      <Itens>
        {items.length === 0 ? (
          <EmptyList>
            <ShoppingCartSimple size={150} />
            <p>Carrinho vazio!</p>
          </EmptyList>
        ) : (
          items.map((item) => (
            <li key={item.id}>
              <ItemCart
                key={item.id}
                itemId={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={itemQuantities[item.id] ?? 0}
              />
              <Divider />
            </li>
          ))
        )}
      </Itens>

      <Row style={{ marginTop: "0.80rem" }}>
        <p>Total de itens</p>
        <p>R$ {totalProductPriceFormatted}</p>
      </Row>
      <Row>
        <p>Entrega</p>
        <p>R$ {freightFormatted}</p>
      </Row>
      <Row>
        <h1>Total</h1>
        <h1>R$ {totalPriceFormatted}</h1>
      </Row>

      <ButtonConfirmOrder
        disabled={disableButtonConfirmOrder}
        onClick={handleSubmit(onSubmit)}
      >
        <p>Confirmar pedido</p>
      </ButtonConfirmOrder>
    </CartContainer>
  );
}
