import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

// Router imports
import Routes from './routes'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SearchPage } from './components/pages/Search'
import { EditorPage } from './components/pages/Editor'
import { WordFormComponent } from './components/word'


// Store imports
import { Store } from './store'

// Rendering
ReactDOM.render(
    <Provider store={Store}>
        <Routes
            BrowserRouter={BrowserRouter}
            Route={Route}
            Switch={Switch}
            SearchPage={SearchPage}
            EditorPage={EditorPage}
            WordFormComponent={WordFormComponent} />
    </Provider>
    , document.getElementById('root')
)
