import React from 'react'

const Routes = ({BrowserRouter, Route, Switch, SearchPage, EditorPage, WordEditPage}) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/editor" component={EditorPage} />
            <Route exact path="/word/new" component={WordEditPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes
