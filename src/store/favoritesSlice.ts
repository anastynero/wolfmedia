import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface FavoritesState{
    favoritesSlugs: string[];
}

const initialState: FavoritesState = {
    favoritesSlugs: JSON.parse(Cookies.get('favoritesSlugs') || '[]') || [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            if(!state.favoritesSlugs.includes(action.payload)){
                state.favoritesSlugs = [...state.favoritesSlugs, action.payload];
                Cookies.set('favoritesSlugs', JSON.stringify(state.favoritesSlugs));
            }
            console.log("Добавлен в избранное:", action.payload);
            console.log("Текущие избранные:", state.favoritesSlugs);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoritesSlugs = state.favoritesSlugs.filter(slug => slug !== action.payload);
            Cookies.set('favoritesSlugs', JSON.stringify(state.favoritesSlugs));
        },
    },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;