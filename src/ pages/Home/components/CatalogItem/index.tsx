import { useContext } from "react";
import { ShoppingCartSimple } from "phosphor-react";
import { Counter } from "../../../../components/Counter";
import {
  BuyActions,
  BuyWrapper,
  CartButton,
  ItemContainer,
  Tag,
  Tags,
} from "./styles";
import { ItemCartProps } from "../../../../reducers/cart/reducer";
import { CartContext } from "../../../../contexts/Cart/CartContext";

interface TagProps {
  title: string;
}

export interface ItemCatalogProps {
  itemId: string;
  image: string;
  tags: TagProps[];
  title: string;
  content: string;
  price: string;
  handleCartButton: (item: ItemCartProps) => void;
}

export function CatalogItem({
  itemId,
  image,
  tags,
  title,
  content,
  price,
  handleCartButton,
}: ItemCatalogProps) {
  const { itemQuantities } = useContext(CartContext);

  const disableButton =
    itemQuantities[itemId] === undefined
      ? true
      : itemQuantities[itemId] === 0
        ? true
        : false;

  return (
    <ItemContainer>
      <img src={image} />
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>
            <p>{tag.title}</p>
          </Tag>
        ))}
      </Tags>

      <h1>{title}</h1>
      <h2>{content}</h2>

      <BuyWrapper>
        <span>
          R$<strong>{price}</strong>
        </span>

        <BuyActions>
          <Counter itemId={itemId} />
          <CartButton
            onClick={() =>
              handleCartButton({
                id: itemId,
                title,
                image,
                price,
                quantity: itemQuantities[itemId] ?? 0,
              })
            }
            disabled={disableButton}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </BuyActions>
      </BuyWrapper>
    </ItemContainer>
  );
}
