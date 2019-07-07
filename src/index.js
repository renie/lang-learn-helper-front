import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

// Router imports
import Routes from './routes'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppComponent } from './App'
import { EssayEditorComponent } from './essay'

// Store imports
import { Store } from './store'

// Rendering
ReactDOM.render(
    <Provider store={Store}>
        <Routes
            BrowserRouter={BrowserRouter}
            Route={Route}
            Switch={Switch}
            AppComponent={AppComponent}
            EssayEditorComponent={EssayEditorComponent} />
    </Provider>
    , document.getElementById('root')
)
