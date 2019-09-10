import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer,persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


import {mainSaga} from "../Sagas"


import rootReducer from '../Reducers'


const composedEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose
const sagaMiddleware = createSagaMiddleware()


const persistConfig = {
  key: 'root',
  storage
}

const combinedReducers = persistReducer(persistConfig, rootReducer)

const store = createStore(rootReducer,composedEnhancer( applyMiddleware(sagaMiddleware)
))




export let persistor = persistStore(store)

sagaMiddleware.run(mainSaga)

export default store
