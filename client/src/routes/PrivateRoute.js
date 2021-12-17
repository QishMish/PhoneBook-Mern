import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = () => {
    const [cookies, setCookie] = useCookies();
    let auth = cookies.jwt ? true : false;
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

