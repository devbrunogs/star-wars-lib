import {
    API_REQUEST,
    API_REQUEST_SUCCESS,
    API_REQUEST_FAILURE,
    API_DELETE_CHARACTER,
    API_SET_CHARACTER_CARD_NAME,
    API_REMOVE_CHARACTER_CARD_NAME
} from "../Constants";

import { removeByName } from "../Helpers";

const initialState = {
    fetching: false,
    characters: null,
    cardCharacter: null,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_REQUEST_SUCCESS:
            return { ...state, fetching: false, characters: action.characters };
        case API_REQUEST_FAILURE:
            return { ...state, fetching: false, characters: null, error: action.error };
        case API_DELETE_CHARACTER:
            return { ...state, characters: removeByName(state.characters, action.name) };
        case API_SET_CHARACTER_CARD_NAME:
            return { ...state, cardCharacter: action.name };
        case API_REMOVE_CHARACTER_CARD_NAME:
            return { ...state, cardCharacter: null };
        default:
            return state;
    }
}