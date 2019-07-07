import React from 'react'

const Routes = ({BrowserRouter, Route, Switch, AppComponent, EssayEditorComponent}) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AppComponent} />
            <Route exact path="/editor" component={EssayEditorComponent} />
        </Switch>
    </BrowserRouter>
)

export default Routes
