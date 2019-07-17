import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllWords, saveEssay } from '../../actions'
import EssayEditor from './EssayEditor'

import WordMark from '../word/WordMark'
import WordMarkBaloon from '../word/WordMarkBaloon'
import EssayEditorLogic from './EssayEditorLogic'


export const createEditorLogic = ({words = []}) =>
    EssayEditorLogic({words, WordMark, WordMarkBaloon })

export const EssayEditorComponent = () => 
    EssayEditor({useEffect, useSelector, useDispatch, createEditorLogic, getAllWords, saveEssay})



