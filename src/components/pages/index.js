import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllWords, saveEssay, saveWord } from '../../actions'


import EssayEditor from './EssayEditor'
import Search from './Search'
import WordEdit from './WordEdit'

export const EssayEditorPage = () => 
    EssayEditor({ useSelector, useDispatch, useEffect, getAllWords, saveEssay })

export const SearchPage = () => 
    Search({ useEffect, useSelector, useDispatch, getAllWords })

export const WordEditPage = () => 
    WordEdit({ useDispatch, saveWord })
