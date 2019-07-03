import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import EssayEditor from './essay/EssayEditor'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/editor" component={EssayEditor} />
        </Switch>
    </BrowserRouter>
)

export default Routes
