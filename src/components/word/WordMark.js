const WordMark = (typed, reference, baloon) => 
    `<span class="word ${reference.meanings[0].wordClass}">
        ${typed}${baloon}
    </span>`

export default WordMark
