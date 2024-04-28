import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import the reducer from userSlice
import userReducer from './slice/userSlice';

const rootReducer = combineReducers({ user: userReducer });

const persistConfiguration = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfiguration, rootReducer);

// configure the redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export persistor to be used in Persist gate at topmost component
export const persistor = persistStore(store);
