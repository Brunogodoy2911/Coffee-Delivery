import { useContext } from "react";
import { Trash } from "phosphor-react";
import { Counter } from "../../../../components/Counter";
import { ButtonRemove, Column, ItemContainer, Row, Wrapper } from "./styles";
import { CartContext } from "../../../../contexts/Cart/CartContext";

interface ItemCartProps {
  itemId: string;
  image: string;
  title: string;
  quantity: number;
  price: string;
}
export function ItemCart({ itemId, image, title, price }: ItemCartProps) {
  const { removeItem } = useContext(CartContext);

  return (
    <ItemContainer>
      <Wrapper>
        <img src={image} alt="" />

        <Column>
          <h1>{title}</h1>
          <Row>
            <Counter itemId={itemId} variants="CartItem" />
            <ButtonRemove onClick={() => removeItem(itemId)}>
              <Trash size={16} />
              <p>Remover</p>
            </ButtonRemove>
          </Row>
        </Column>
      </Wrapper>

      <p>R$ {price}</p>
    </ItemContainer>
  );
}
