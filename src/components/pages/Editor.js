import React from 'react'

import { EssayEditorComponent } from '../essay'
import Layout from '../layout/Layout'

export const Editor = () => (
    <Layout>
        <EssayEditorComponent />
    </Layout>
)
 


export const EditorPage = () => Editor()
