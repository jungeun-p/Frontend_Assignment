import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import scheduleReducer from "./schedule";
import scheduleSaga from "./scheduleSaga";

const reducer = combineReducers({
  schedule: scheduleReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([scheduleSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
