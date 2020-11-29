import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./Reducer";
import { watcherSaga } from "./Actions";

import Main from "./Containers/Main";

import "./Style/styles.scss";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("root")
);
