import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxMiddelware from './reduxMiddelware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { persistStore } from 'redux-persist'


const initializeStore  = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewareEnhancer = applyMiddleware(sagaMiddleware,reduxMiddelware)

  let store = createStore(rootReducer, middlewareEnhancer);
  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor }
}

const { store, persistor } = initializeStore();

export {store , persistor};

 