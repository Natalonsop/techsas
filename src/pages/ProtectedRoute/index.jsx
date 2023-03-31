import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "@hooks/useAuth.jsx";

export const ProtectedRoute = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (!user){
        // Si el usuario no esta autenticado
        return <Navigate to={"/"} />
    }

    return (
        <>
            {outlet}
        </>
    );
};