import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface ItemCartProps {
  id: string;
  image: string;
  title: string;
  quantity: number;
  price: string;
}

export interface CartState {
  items: ItemCartProps[];
  totalPrice: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, actions: any) {
  switch (actions.type) {
    case ActionTypes.ADD_NEW_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.items.push(actions.payload.newItem);
      });
    case ActionTypes.UPDATE_QUANTITY_OF_ITEM_IN_CART:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex(
          (item) => item.id === actions.payload.id
        );

        if (itemIndex >= 0) {
          if (actions.payload.operation === "increment") {
            draft.items[itemIndex].quantity += 1;
          } else if (actions.payload.operation === "decrement") {
            draft.items[itemIndex].quantity -= 1;
          }
        }
      });
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.id !== actions.payload.id
        );
      });
    case ActionTypes.RESET_ITEMS_IN_CART:
      return {
        ...state,
        items: actions.payload.items,
        totalPrice: 0,
      };

    default:
      return state;
  }
}
