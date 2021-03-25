import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ADMIN_BASE_URL } from '../helpers/adminRoutes';

export default function AdminRouter(a) {

    // TODO: user verification
    // let user = 1;
    let adminData = JSON.parse(localStorage.getItem('adminData'));

    const authComponentResolver = props => {
        const authorizedComponent = <a.component {...props} />
        const redirectToAuthComponent = <Redirect to={{ pathname: ADMIN_BASE_URL }} />

        if (adminData && adminData !== undefined && adminData !== null && adminData.token && adminData.data && adminData.data.role === "admin") {
            return authorizedComponent;
        } else {
            return redirectToAuthComponent;
        }
    }

    return (
        <Route render={authComponentResolver} />
    );
}