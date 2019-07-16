import React from 'react'

const Routes = ({BrowserRouter, Route, Switch, SearchPage, EditorPage, WordFormComponent}) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/editor" component={EditorPage} />
            <Route exact path="/word/new" component={WordFormComponent} />
        </Switch>
    </BrowserRouter>
)

export default Routes
