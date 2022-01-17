import React from "react";
import { Route, Redirect } from 'react-router-dom';
import  PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }){

    // Verificar se o usuario esta logado
    const isLoggedIn = false; // vai ficar no estate global.

    // Essa rota é fechada e o usuario não esta logado?
    if(isClosed && !isLoggedIn){
        // Retorna um redirect e redireciona a pagina
        return (
            <Redirect
            // O pathname que é pra onde ele esta indo;
            // Pra ter os dados da rota anterior, state: 
            to={ {pathname: '/login', state: {prevPath: rest.location.pathname}} }
            />
        )
    }

    // Se o usuario estiver logado, vai passar e levar para as rotas protegidas
    return <Route {...rest} component={Component} />
    
    // eslint-disable-next-line
    MyRoute.defaultProps = {
        isClosed: false,
    }

    // Validar os components com prop-types
    MyRoute.propTypes = {
        component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
        isClosed: PropTypes.bool,
    }
}