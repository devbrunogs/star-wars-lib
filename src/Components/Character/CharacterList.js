import React from "react";
import {array, func} from "prop-types";
import EmptyState from "../Layout/EmptyState";
import CharacterListItem from "./CharacterListItem";

const buildCharactersList = (characters, setCardCharacter, deleteCharacter) => {
    return characters.map((character, index) => {
        return (
            <CharacterListItem
                key={index}
                name={character.name}
                color={character.eye_color}
                setCardCharacter={setCardCharacter}
                deleteCharacter={deleteCharacter}
            />
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

CharacterList.displayName = "Character/CharacterList";

CharacterList.propTypes = {
    characters: array,
    setCardCharacter: func,
    deleteCharacter: func
}

export default CharacterList;