import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

import { authReducer } from "./auth/slice";
import { filterReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactSlice';

// import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: 'root',
//     storage,

// }
// const persistedReducer = persistReducer(persistConfig, contactsReducer);
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredAction: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
];
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
}
export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware,
    devTools:process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
