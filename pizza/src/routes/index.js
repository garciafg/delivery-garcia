import React from "react";
import { Switch } from 'react-router-dom';
import MyRoute from "./myRoutes";
//paginas
import Home from '../pages/home';
import Pizzas from '../pages/pizzas/';
import Product from '../pages/product/';
// import Page404 from '../pages/Page404'

function Routes() {


    return(

        <>
            <Switch>
                {/* <MyRoute exact path="/" component={Home} isClosed /> */}
                <MyRoute exact path="/:slug" component={Home} />
                <MyRoute exact path="/item/pizzas" component={Pizzas} />
                <MyRoute exact path="/product/:slug" component={Product} />
                {/* <MyRoute path="*" component={Page404} /> */}
            </Switch>
        </>
    )


}

export default Routes;