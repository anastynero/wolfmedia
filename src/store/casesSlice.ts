import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface CaseItem {
  title: string;
  poster: {
    image: {
      src: string;
      src2x?: string;
      tablet?: string;
      mobile?: string;
    };
  };
  tagsDisplayed: string; 
  slug: string;
}

interface CasesState {
  items: CaseItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  offset: number; 
  hasMore: boolean; // есть ли еще данные
}

const initialState: CasesState = {
  items: [],
  status: 'idle',
  error: null,
  offset: 0,
  hasMore: true
};

export const fetchProducts = createAsyncThunk<CaseItem[], number>(
  'cases/fetchProducts',
  async (offset = 0) => {
    const response = await fetch(`https://api.cms.chulakov.dev/page/work?limit=10&offset=${offset}`);
    const data = await response.json();
    return data.items;
  }
);

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<CaseItem[]>) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action.payload];
        state.offset += 11;
        state.hasMore = action.payload.length === 10;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
});

export default casesSlice.reducer;