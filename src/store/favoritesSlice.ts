import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState{
    favoritesSlugs: string[];
}

const initialState: FavoritesState = {
    favoritesSlugs: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            if(!state.favoritesSlugs.includes(action.payload)){
                state.favoritesSlugs.push(action.payload)
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoritesSlugs = state.favoritesSlugs.filter(slug => slug !== action.payload);
        },
    },
})

export default favoritesSlice.reducer;