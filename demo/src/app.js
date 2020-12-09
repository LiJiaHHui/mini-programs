import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react'
import Cart from './page/cart'
import Home from './page/home'
import My from './page/my'
import cartStore from './store'
import Shop from './page/shop'
class App extends Component {
    render() {
        return (
            <div id='app'>
                <Router>
                    <Switch>
                        <Route exact path="/" > <Home /></Route>
                        <Route path="/cart" >
                            <Provider cartStore={cartStore}>
                                <Cart />
                            </Provider> </Route>
                        <Route path="/my" ><My /></Route>
                        <Route path="/shop" ><Shop /></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)