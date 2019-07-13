import React from 'react'

const WordForm = () => (
    <>
        <div class="field">
            <label for="name" class="label">Word:</label>
            <div class="control">
                <input class="input" type="text" id="name" />
            </div>
        </div>
        <div class="field">
            <label for="meaning1" class="label">Meaning:</label>
            <div class="control">
                <textarea id="meaning1" class="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div class="field">
            <label class="label">Word class:</label>
            <div class="control">
                <div class="select">
                    <select>
                        <option default>not_set</option>
                        <option>noun</option> 
                        <option>verb</option> 
                        <option>adjective</option> 
                        <option>adverb</option> 
                        <option>pronoun</option> 
                        <option>preposition</option> 
                        <option>conjunction</option> 
                        <option>interjection</option>
                        <option>numeral</option>
                        <option>article</option>
                        <option>determiner</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="field">
            <label for="example" class="label">Example:</label>
            <div class="control">
                <input class="input" type="text" id="example" />
            </div>
        </div>
    </>
)

export default WordForm
