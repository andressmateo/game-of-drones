import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './rootReducer';
import rootSaga from './rootSaga';

//Enable redux dev tool on the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware), autoRehydrate())
);
sagaMiddleware.run(rootSaga);

persistStore(store);

export { store };
