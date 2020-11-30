import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
    API_REQUEST,
    API_DELETE_CHARACTER,
    API_REQUEST_SUCCESS,
    API_REQUEST_FAILURE,
    API_SET_CHARACTER_CARD_NAME,
    API_REMOVE_CHARACTER_CARD_NAME,
} from "../Constants";

import { sortByName } from "../Helpers";

export function* watcherSaga() {
    yield takeLatest(API_REQUEST, setCharactersData);
    yield takeEvery(API_DELETE_CHARACTER, deleteCharacter)
    yield takeEvery(API_SET_CHARACTER_CARD_NAME, setCardCharacter)
    yield takeEvery(API_REMOVE_CHARACTER_CARD_NAME, removeCardCharacter)
}

// make the request to the API
export const fetchCharacters = () => {
    return axios({
        method: "get",
        url: "https://swapi.dev/api/people/"
    });
}

// set API response on the store
export function* setCharactersData() {
    try {
        const response = yield call(fetchCharacters);
        const characters = sortByName(response.data.results);

        yield put({ type: API_REQUEST_SUCCESS, characters });

    } catch (error) {
        yield put({ type: API_REQUEST_FAILURE, error });
    }
}

// set character to be used on card
export function* setCardCharacter(name) {
    try {
        put({ type: API_SET_CHARACTER_CARD_NAME, name });
    } catch (error) {
        put({ type: API_REQUEST_FAILURE, error });
    }
}

// remove character used on card
export function* removeCardCharacter() {
    try {
        put({ type: API_SET_CHARACTER_CARD_NAME });
    } catch (error) {
        put({ type: API_REQUEST_FAILURE, error });
    }
}

// remove character from the store
export function* deleteCharacter(name) {
    try {
        put({ type: API_DELETE_CHARACTER, name });

    } catch (error) {
        put({ type: API_REQUEST_FAILURE, error });
    }
}