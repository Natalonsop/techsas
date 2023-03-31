import React from "react";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";

import HomePage from "@pages/Home";
import LoginPage from "@pages/Login";

import { ProtectedRoute } from "@pages/ProtectedRoute";
import { AuthLayout } from "@pages/AuthLayout";

const getUserData = () =>
    new Promise((resolve) =>
        setTimeout(() => {
            const user = window.localStorage.getItem("user");
            resolve(user);
        }, 3000)
    );

export const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AuthLayout />}
           loader={() => defer({ userPromise: getUserData() })}>
        <Route element={<LoginPage />}>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Route>
        <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<HomePage />}></Route>
        </Route>
    </Route>
));
