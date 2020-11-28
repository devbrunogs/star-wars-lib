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
        requestCharacters: () => {
            dispatch({ type: API_REQUEST })
        },
        deleteCharacter: name => {
            dispatch({ type: API_DELETE_CHARACTER, name})
        },
        setCardCharacter: name => {
            dispatch({ type: API_SET_CHARACTER_CARD_NAME, name})
        },
        removeCardCharacter: () => {
            dispatch({ type: API_REMOVE_CHARACTER_CARD_NAME })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);