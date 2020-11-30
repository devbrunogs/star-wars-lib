import React from "react";
import {string, func} from "prop-types";

import { getColorString } from "../../Helpers";

const CharacterListItem = ({name, color, setCardCharacter, deleteCharacter}) => {
    return (
        <div className="character-item">
            <span
                style={{color: getColorString(color), cursor: "pointer"}}
                onClick={() => setCardCharacter(name)}
            >
                {name}
            </span>
            <div className="character-item-actions">
                <button className="btn-error" onClick={() => deleteCharacter(name)}>
                    Delete
                </button>
                <button className="btn-primary" onClick={() => setCardCharacter(name)}>
                    View More
                </button>
            </div>
        </div>
    );
}

CharacterListItem.displayName = "Character/CharacterListItem";

CharacterListItem.propTypes = {
    name: string,
    eyeColor: string,
    setCardCharacter: func,
    deleteCharacter: func
}

export default CharacterListItem;