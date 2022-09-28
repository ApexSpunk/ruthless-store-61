import Action from "./Action";

const Reducer = (state, action) => {
    switch (action.type) {
        case Action.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                qty: state.qty + 1,
                total: state.total + action.payload.price,
            };
        case Action.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
                qty: state.qty - 1,
                total: state.total - action.payload.price,
            };
        case Action.CLEAR_CART:
            return {
                ...state,
                cart: [],
                qty: 0,
                total: 0,
            };
        default:
            return state;
    }
}

export default Reducer;