import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export {
  store,
  persistor,
  sagaMiddleware
};
