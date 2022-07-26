import React from 'react';

//Screens
import {ItemListContainer} from '../screens/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from '../screens/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../screens/Cart/Cart';

//Router
import {Switch, Route} from 'react-router-dom';



export const Router = () => {
    return <Switch>
            <Route exact path="/">
                <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId">
                <ItemListContainer />
            </Route>
            <Route path="/item/:productId">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
        </Switch>
}

 