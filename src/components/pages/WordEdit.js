import React from 'react'

import { WordFormComponent } from '../word'
import Layout from '../layout/Layout'

export const WordEdit = () => (
    <Layout>
        <WordFormComponent />
    </Layout>
)
 


export const WordEditPage = () => WordEdit()
