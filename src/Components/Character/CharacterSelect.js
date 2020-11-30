import React from "react";
import {func, array} from "prop-types";
import Select from "../Form/Select";

import { getColorString } from "../../Helpers";

const buildCharactersList = characters => {
    return characters.map(character => {
        return {
            color: getColorString(character.eye_color),
            value: character.name,
            text: character.name
        };
    })
}

const CharacterSelect = props => {
    const onSelect = name => {
        props.setCardCharacter(name)
    }

    const extraAction = name => {
        return <button className="btn-error" onClick={() => props.deleteCharacter(name)}>X</button>
    }

    const onClear = () => props.removeCardCharacter();

    const getSelect = () => {
        return (
            <Select
                selectedOptionText={props.cardCharacter}
                onSelect={onSelect}
                getOptions={() => buildCharactersList(props.characters)}
                extraAction={extraAction}
                onClear={onClear}
            />
        );
    }

    return getSelect();
}

CharacterSelect.displayName = "Character/CharacterSelect";

CharacterSelect.propTypes = {
    characters: array,
    setCardCharacter: func,
    deleteCharacter: func
}

export default CharacterSelect;