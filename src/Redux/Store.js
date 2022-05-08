import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { logInReducer } from "./Rducers/loginreducer";
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const rootReducer = combineReducers({ logInReducer });


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


