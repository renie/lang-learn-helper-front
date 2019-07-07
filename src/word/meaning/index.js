import MeaningList from './MeaningList'
import MeaningListItem from './MeaningListItem'

export const MeaningListComponent = ({meanings}) =>
    MeaningList({ meanings, MeaningListItem })
