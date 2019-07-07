import React from 'react'

const MeaningList = ({meanings, MeaningListItem}) => {
    return (
        <ul>
            {meanings.map(meaning => <MeaningListItem key={meaning.id} meaning={meaning}/>)}
        </ul>
    )
}

export default MeaningList
