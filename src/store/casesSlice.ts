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
  tagsDisplayed?: string; 
  slug: string;
}

interface CasesState {
  items: CaseItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CasesState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk<CaseItem[]>(
  'cases/fetchProducts',
  async () => {
    const response = await fetch('https://api.cms.chulakov.dev/page/work');
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
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
});

export default casesSlice.reducer;