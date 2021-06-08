import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsAuth } from '../selectors/auth-selector';


export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC = (props) => {
        const isAuth = useSelector(selectIsAuth);
        if (!isAuth) return <Redirect to = '/login' />

        return <WrappedComponent {...props as WCP} />
    }
    
    return RedirectComponent;
}