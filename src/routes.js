import React from 'react'

const Routes = ({BrowserRouter, Route, Switch, AppComponent, EssayEditorComponent, WordFormComponent}) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AppComponent} />
            <Route exact path="/editor" component={EssayEditorComponent} />
            <Route exact path="/word/new" component={WordFormComponent} />
        </Switch>
    </BrowserRouter>
)

export default Routes
