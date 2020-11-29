import React from "react";
import EmptyState from "../Layout/EmptyState";

import { getColorString } from "../../Helpers";

const buildCharactersList = (characters, setCardCharacter, deleteCharacter) => {
    return characters.map((character, index) => {
        return (
            <div key={index} className="character-item">

                <span
                    style={{color: getColorString(character.eye_color)}}
                    onClick={() => setCardCharacter(character.name)}
                >
                    {character.name}
                </span>
                <div className="character-item-actions">
                    <button className="btn-error" onClick={() => deleteCharacter(character.name)}>
                        Delete
                    </button>
                    <button className="btn-primary" onClick={() => setCardCharacter(character.name)}>
                        View More
                    </button>
                </div>
            </div>
        );
    })
}

const CharacterList = ({characters, setCardCharacter, deleteCharacter, onEmptyState}) => {
    return characters && characters.length ? (
        <div className="character-wrapper">
            {buildCharactersList(characters, setCardCharacter, deleteCharacter)}
        </div>
    ) : <EmptyState action={onEmptyState} />;
}

export default CharacterList;