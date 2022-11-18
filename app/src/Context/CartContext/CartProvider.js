import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

export const CartContext = createContext();

const initailState = {
    cart: [],
    total: 0,
    qty: 0,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initailState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;