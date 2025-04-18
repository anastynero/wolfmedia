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
  banner: {
    options?: {
      menuColor: string;
    };
    poster: {
      image: {
        src: string;
        src2x?: string;
        tablet?: string;
        mobile?: string;
      };
    };
  };
}

interface CasesState {
  items: CaseItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  offset: number;
  hasMore: boolean;
  currentCase: CaseItem | null;
}

const initialState: CasesState = {
  items: [],
  currentCase: null,
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

export const fetchCaseBySlug = createAsyncThunk<CaseItem, string>(
  'cases/fetchCaseBySlug',
  async (slug: string) => {
    const response = await fetch(`https://api.cms.chulakov.dev/page/work/${slug}`);
    if (!response.ok) {
      throw new Error('Кейс не найден');
    }
    return response.json();
  }
);

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<CaseItem[]>) => {
      state.items = action.payload;
      state.status = 'succeeded';
      state.offset = action.payload.length;
      state.hasMore = action.payload.length >= 10;
    },
    resetCases: (state) => {
      state.items = [];
      state.offset = 0;
      state.hasMore = true;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<CaseItem[]>) => {
        state.status = 'succeeded';
        const newItems = action.payload.filter(
          item => !state.items.some(existing => existing.slug === item.slug)
        );
        state.items = [...state.items, ...newItems];
        state.offset = state.items.length;
        state.hasMore = action.payload.length === 10;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Что-то пошло не так';
      })
      .addCase(fetchCaseBySlug.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCaseBySlug.fulfilled, (state, action: PayloadAction<CaseItem>) => {
        state.status = 'succeeded';
        state.currentCase = action.payload;
      })
      .addCase(fetchCaseBySlug.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch case';
      });
  },
});

export default casesSlice.reducer;
export const { initialize, resetCases } = casesSlice.actions;