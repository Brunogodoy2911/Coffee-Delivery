import { useContext } from "react";
import { Minus, Plus } from "phosphor-react";

import { Container, CounterPropsVariantsStyles } from "./styles";
import { CartContext } from "../../contexts/Cart/CartContext";

interface CounterProps {
  itemId: string;
  variants?: CounterPropsVariantsStyles;
}

export function Counter({ itemId, variants = "CatalogItem" }: CounterProps) {
  const { updateCounterQuantity, itemQuantities } = useContext(CartContext);

  console.log(itemQuantities);

  return (
    <Container $variant={variants}>
      <Minus
        size={14}
        onClick={() => updateCounterQuantity(itemId, "decrement")}
      />
      <span>{itemQuantities[itemId] ?? 0}</span>
      <Plus
        size={14}
        onClick={() => updateCounterQuantity(itemId, "increment")}
      />
    </Container>
  );
}
