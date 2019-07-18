import WordForm from './WordForm'
import WordList from './WordList'
import WordListItem from './WordListItem'
import { MeaningListComponent } from './meaning'

export const WordListItemComponent = ({ word, key }) =>
    WordListItem({ word, key, MeaningListComponent })

export const WordListComponent = ({ words = [] }) =>
    WordList({ words, WordListItemComponent })

export const WordFormComponent = ({ saveWord = () => {}, wordClasses }) =>
    WordForm({ saveWord, wordClasses })

