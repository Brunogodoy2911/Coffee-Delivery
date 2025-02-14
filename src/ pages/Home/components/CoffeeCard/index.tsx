import {
  BuyActions,
  BuyWrapper,
  Card,
  CartButton,
  Counter,
  Tag,
  Tags,
} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

interface TagProps {
  title: string;
}

export interface CoffeeProps {
  image: string;
  tags: TagProps[];
  title: string;
  content: string;
  price: string;
}

export function CardCoffee({
  image,
  tags,
  title,
  content,
  price,
}: CoffeeProps) {
  return (
    <Card>
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
          <Counter>
            <Minus size={14} onClick={() => console.log("Minus click")} />
            <span>1</span>
            <Plus size={14} onClick={() => console.log("Plus click")} />
          </Counter>

          <CartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </BuyActions>
      </BuyWrapper>
    </Card>
  );
}
