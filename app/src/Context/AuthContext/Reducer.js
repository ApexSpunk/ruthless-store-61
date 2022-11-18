import Action from "./Action";

const Reducer = (state, action) => {
    switch (action.type) {
        case Action.LOADING:
            return {
                ...state,
                loading: true,
            };
        case Action.LOGIN:
            return {
                ...state,
                loading: false,
                authState: {
                    isAuth: true,
                    user: action.payload.name,
                    email: action.payload.email,
                },
            };
        case Action.LOGOUT:
            return {
                ...state,
                loading: false,
                authState: {
                    isAuth: false,
                    user: null,
                    email: null,
                },
            };
        default:
            return state;
    }
};

export default Reducer;