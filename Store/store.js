import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxMiddelware from './reduxMiddelware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';



const sagaMiddleware = createSagaMiddleware()
const middlewareEnhancer = applyMiddleware(sagaMiddleware,reduxMiddelware)

const store = createStore(rootReducer, middlewareEnhancer)

sagaMiddleware.run(rootSaga);

export default store