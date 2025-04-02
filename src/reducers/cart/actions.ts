import { ItemCartProps } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM_TO_CART = "ADD_NEW_ITEM_TO_CART",
  UPDATE_QUANTITY_OF_ITEM_IN_CART = "UPDATE_QUANTITY_OF_ITEM_IN_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  RESET_ITEMS_IN_CART = "RESET_ITEMS_IN_CART",
}

export function addNewItemToCartAction(newItem: ItemCartProps) {
  return {
    type: ActionTypes.ADD_NEW_ITEM_TO_CART,
    payload: {
      newItem,
    },
  };
}

export function updateQuantityOfItemInCart(
  id: string,
  operation: "increment" | "decrement"
) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_OF_ITEM_IN_CART,
    payload: {
      id,
      operation,
    },
  };
}

export function removeItemFromCart(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  };
}

export function resetItemsInCart(items: ItemCartProps[]) {
  return {
    type: ActionTypes.RESET_ITEMS_IN_CART,
    payload: {
      items,
    },
  };
}
