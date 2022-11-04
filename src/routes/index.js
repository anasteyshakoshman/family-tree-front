import React from 'react';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('../containers/Main'));
const AuthPage = loadable(() => import('../containers/Auth'));
const NotFoundPage = loadable(() => import('../pages/NotFound/NotFound'));

export const routes = [
    {
        path: '/',
        element: <MainPage />
    }, {
        path: '/login',
        element: <AuthPage />
    }, {
        path: '/*',
        exact: false,
        element: <NotFoundPage />
    }
];
