import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

// Router imports
import Routes from './routes'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SearchPage, EssayEditorPage, WordEditPage } from './components/pages'


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
            EssayEditorPage={EssayEditorPage}
            WordEditPage={WordEditPage} />
    </Provider>
    , document.getElementById('root')
)
