import { act } from "react-dom/test-utils";
import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState = { cart: [] };

export function CartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.data],
            };
        case REMOVE_TO_CART:
            return {
                cart: [...state.cart, action.data],
            };
        default:
            return state;
    }
}
