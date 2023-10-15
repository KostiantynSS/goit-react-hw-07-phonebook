import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactSlice';
import { filterReducer } from './slice/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
