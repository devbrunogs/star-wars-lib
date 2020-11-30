import React from "react";
import { connect } from "react-redux";
import Main from "../Components/App";

import {
    API_REQUEST,
    API_SET_CHARACTER_CARD_NAME,
    API_REMOVE_CHARACTER_CARD_NAME,
    API_DELETE_CHARACTER
} from "../Constants";

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        characters: state.characters,
        cardCharacter: state.cardCharacter,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // call the api and request the characters
        requestCharacters: () => {
            dispatch({ type: API_REQUEST })
        },
        // remove character from store
        deleteCharacter: name => {
            dispatch({ type: API_DELETE_CHARACTER, name})
        },
        // set the character to be displayed on card
        setCardCharacter: name => {
            dispatch({ type: API_SET_CHARACTER_CARD_NAME, name})
        },
        // remove the character from card
        removeCardCharacter: () => {
            dispatch({ type: API_REMOVE_CHARACTER_CARD_NAME })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);