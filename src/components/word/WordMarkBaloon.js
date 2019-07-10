const WordMarkBaloon = reference => 
    `<div class="baloon" contentEditable="false">
        <p>
            ${reference.name}: a(n) ${reference.meanings[0].wordClass} that means ${reference.meanings[0].description}</p>
        <p>
            As in: ${reference.meanings[0].example}</p>
    </div>`


export default WordMarkBaloon
