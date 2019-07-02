import React from 'react'

import MeaningListItem from './MeaningListItem'

const MeaningList = ({meanings}) => {
  return (
    <ul>
        {meanings.map(meaning => <MeaningListItem key={meaning.id} meaning={meaning}/>)}
    </ul>
  )
}

export default MeaningList
