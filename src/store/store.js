import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas/index';

import rootReducer from './reducers/index';

const reduxSagaMiddleware = reduxSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxSagaMiddleware, logger))
);
reduxSagaMiddleware.run(rootSaga);

export default store;
