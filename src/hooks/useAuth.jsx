import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const AuthProvider = ({ children, userData }) => {
    const [ user, setUser ] = useLocalStorage("user", userData);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        navigate("../home", { replace: true });
    };

    const logout = () => {
        setUser(null);
        navigate("../login", { replace: true });
    }

    const value = useMemo(() => ({ user, login, logout }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

const AuthContext = createContext(AuthProvider);

export const useAuth = () => {
    return useContext(AuthContext);
}








