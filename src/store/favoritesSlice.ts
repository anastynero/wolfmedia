import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState{
    favoritesSlugs: string[];
}

const getFavoritesFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favoritesSlugs');
      if (savedFavorites) {
          const parsed = JSON.parse(savedFavorites);
          if (Array.isArray(parsed)) {
            return parsed.filter((slug): slug is string => typeof slug === 'string');
      }
    }
}
    return [];
};

const initialState: FavoritesState = {
    favoritesSlugs: getFavoritesFromLocalStorage(), 
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            if(!state.favoritesSlugs.includes(action.payload)){
                state.favoritesSlugs = [...state.favoritesSlugs, action.payload];
                localStorage.setItem('favoritesSlugs', JSON.stringify(state.favoritesSlugs));
                console.log(action.payload)
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoritesSlugs = state.favoritesSlugs.filter(slug => slug !== action.payload);
            localStorage.setItem('favoritesSlugs', JSON.stringify(state.favoritesSlugs));
        },
    },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;