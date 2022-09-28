import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

export const AuthContext = createContext();

const initailState = {
    loading: true,
    error: null,
    authState: {
        isAuth: false,
        user: null,
        email: null,
    }
}

const AuthProvider = ({ children }) => {


    const [state, dispatch] = useReducer(Reducer, initailState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;