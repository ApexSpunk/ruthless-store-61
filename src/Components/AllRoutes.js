import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Store from "../Pages/Store";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/store" element={<PrivateRoutes><Store /></PrivateRoutes>} />
        </Routes>
    );
}

