import React from 'react';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('../containers/Main/Main'));
const AuthPage = loadable(() => import('../containers/Auth/Auth'));
const NotFoundPage = loadable(() => import('../components/NotFound/NotFound'));

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
