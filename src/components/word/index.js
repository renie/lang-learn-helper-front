import WordList from './WordList'
import WordListItem from './WordListItem'
import { MeaningListComponent } from './meaning'

import WordForm from './WordForm'

export const WordListItemComponent = ({word, key}) =>
    WordListItem({ word, key, MeaningListComponent })

export const WordListComponent = ({words}) =>
    WordList({ words, WordListItemComponent })

export const WordFormComponent = ({words}) =>
    WordForm()

