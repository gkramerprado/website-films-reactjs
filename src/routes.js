import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Details from './pages/FilmDetail';


const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="main-frame">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exatc path="/details/:id" component={Details}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );

}

export default Routes;