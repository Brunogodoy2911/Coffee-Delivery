import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer, ItemCartProps } from "../../reducers/cart/reducer";
import {
  addNewItemToCartAction,
  removeItemFromCart,
  resetItemsInCart,
  updateQuantityOfItemInCart,
} from "../../reducers/cart/actions";

interface CartContextType {
  items: ItemCartProps[];
  totalPriceFormatted: string;
  totalProductPriceFormatted: string;
  freightFormatted: string;
  itemQuantities: Record<string, number>;
  addNewItemToCart: (newItem: ItemCartProps) => void;
  updateCounterQuantity: (
    itemId: string,
    operation: "increment" | "decrement"
  ) => void;
  removeItem: (itemId: string) => void;
  resetCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>(
    () => {
      const savedQuantities = localStorage.getItem(
        "@coffee-delivery:item-quantities"
      );
      return savedQuantities ? JSON.parse(savedQuantities) : {};
    }
  );

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      totalPrice: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { items } = cartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  useEffect(() => {
    const quantitiesJSON = JSON.stringify(itemQuantities);
    localStorage.setItem("@coffee-delivery:item-quantities", quantitiesJSON);
  }, [itemQuantities]);

  function addNewItemToCart(item: ItemCartProps) {
    const newItem: ItemCartProps = {
      id: item.id,
      image: item.image,
      title: item.title,
      quantity: item.quantity,
      price: item.price,
    };

    if (items.find((item) => item.id === newItem.id)) {
      return alert("Item já está no carrinho");
    }

    dispatch(addNewItemToCartAction(newItem));
  }

  function updateCounterQuantity(
    itemId: string,
    operation: "increment" | "decrement"
  ) {
    dispatch(updateQuantityOfItemInCart(itemId, operation));

    setItemQuantities((prev) => {
      const currentQuantity = prev[itemId] ?? 0;

      const newQuantities = {
        ...prev,
        [itemId]:
          operation === "increment"
            ? currentQuantity + 1
            : Math.max(currentQuantity - 1, 1),
      };

      return newQuantities;
    });
  }

  function removeItem(itemId: string) {
    dispatch(removeItemFromCart(itemId));
  }

  function resetCart() {
    dispatch(resetItemsInCart([]));
  }

  const totalProductPrice = Object.entries(itemQuantities).reduce(
    (total, [itemId, quantity]) => {
      const item = items.find((item) => item.id === itemId);
      return item ? total + quantity * parseFloat(item.price) : total;
    },
    0
  );

  const totalProductPriceFormatted = totalProductPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const freight = 3.5;

  const freightFormatted = freight.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let { totalPrice } = cartState;

  totalPrice = totalProductPrice + freight;

  const totalPriceFormatted = totalPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <CartContext.Provider
      value={{
        items,
        totalPriceFormatted,
        itemQuantities,
        freightFormatted,
        totalProductPriceFormatted,
        addNewItemToCart,
        updateCounterQuantity,
        removeItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
