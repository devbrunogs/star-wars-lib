import React from "react";

import { getColorString } from "../../Helpers";

const buildCharacterInfo = character => {
    return (
        <dl>
            <dt>Name:</dt>
            <dd>{character.name}</dd>
            
            <dt>Birth:</dt>
            <dd>{character.birth_year}</dd>
            
            <dt>Gender:</dt>
            <dd>{character.gender}</dd>
            
            <dt>Height:</dt>
            <dd>{character.height}</dd>
            
            <dt>Mass:</dt>
            <dd>{character.mass}</dd>
            
            <dt>Skin Color:</dt>
            <dd>{character.skin_color}</dd>
            
            <dt>Hair Color:</dt>
            <dd style={{color: getColorString(character.hair_color)}}>{character.hair_color}</dd>
            
            <dt>Eye Color:</dt>
            <dd style={{color: getColorString(character.eye_color)}}>{character.eye_color}</dd>
        </dl>
    );
}

// const CharacterList = ({character, deleteCharacter}) => {
const CharacterList = ({characterInfo, deleteCharacter, removeCardCharacter}) => {
    return characterInfo ? (
        <React.Fragment>
            <span onClick={() => deleteCharacter(characterInfo.name)}>Remove X</span>
            <span onClick={() => removeCardCharacter()}>Close</span>
            {buildCharacterInfo(characterInfo)}
        </React.Fragment>
    ) : null;
}

export default CharacterList;