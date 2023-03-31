import React, { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "@hooks/useAuth";

export const AuthLayout = () => {
    const outlet = useOutlet();
    const { userPromise } = useLoaderData();

    const Loader = () => (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );

    const Alert = () => (
        <div className="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>
    );


    return (
        <Suspense fallback={<Loader />} >
            <Await resolve={userPromise}
                   errorElement={<Alert />}
                   children={(user) => (
                       <AuthProvider userData={user}>{outlet}</AuthProvider>
                   )}
            />
        </Suspense>
    );
}










