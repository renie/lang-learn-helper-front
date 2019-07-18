import WordMark from '../word/WordMark'
import WordMarkBaloon from '../word/WordMarkBaloon'
import EssayEditor from './EssayEditor'
import EssayEditorLogic from './EssayEditorLogic'

export const createEditorLogic = ({ words = [] }) =>
    EssayEditorLogic({ words, WordMark, WordMarkBaloon })

export const EssayEditorComponent = ({ words = [], saveEssay = () => {}}) => 
    EssayEditor({ createEditorLogic, words, saveEssay })
