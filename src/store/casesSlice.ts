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
  page: number; // текущая страница
  hasMore: boolean; // есть ли еще данные
}

const initialState: CasesState = {
  items: [],
  status: 'idle',
  error: null,
  page: 1,
  hasMore: true
};

export const fetchProducts = createAsyncThunk<CaseItem[], number>(
  'cases/fetchProducts',
  async (page = 1) => {
    const response = await fetch(`https://api.cms.chulakov.dev/page/work?page=${page}&limit=10`);
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
        state.page += 1;
        state.hasMore = action.payload.length === 10;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
});

export default casesSlice.reducer;