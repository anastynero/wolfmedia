import { configureStore } from '@reduxjs/toolkit'
import casesReducer from './casesSlice';
import { useDispatch } from 'react-redux';
import favoritesReducer from './favoritesSlice'


export const store = configureStore({
    reducer: {
      cases: casesReducer,
      favorites: favoritesReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();