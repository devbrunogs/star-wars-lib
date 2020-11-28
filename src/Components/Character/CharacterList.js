import React from "react";
import EmptyState from "../Layout/EmptyState";

import { getColorString } from "../../Helpers";

const buildCharactersList = (characters, setCardCharacter, deleteCharacter) => {
    return characters.map((character, index) => {
        return (
            <li key={index}>
                <span 
                    style={{color: getColorString(character.eye_color)}}
                    onClick={() => setCardCharacter(character.name)}
                >
                    {character.name}
                </span>
                <span onClick={() => deleteCharacter(character.name)}>Delete</span>
            </li>
        );
    })
}

const CharacterList = ({characters, setCardCharacter, deleteCharacter}) => {
    return characters && characters.length ? (
        <ul>
            {buildCharactersList(characters, setCardCharacter, deleteCharacter)}
        </ul>  
    ) : <EmptyState />;
}

export default CharacterList;