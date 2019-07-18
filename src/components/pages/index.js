import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllWords, saveEssay } from '../../actions'


import EssayEditor from './EssayEditor'

export const EssayEditorPage = () => 
    EssayEditor({ useSelector, useDispatch, useEffect, getAllWords, saveEssay })
