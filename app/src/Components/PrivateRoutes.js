import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
    const { state: { authState } } = useContext(AuthContext);
    return authState.isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;