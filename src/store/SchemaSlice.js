import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSchema = createAsyncThunk('schema/fetchSchema', async () => {
  const response = await axios.get('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return response.data;
});

const initialState = {
  validateSchema: {},
  error: null,
  isLoading: false,
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.validateSchema = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSchema.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSchema.fulfilled, (state, action) => {
        state.isLoading = false;
        state.validateSchema = action.payload;
      })
      .addCase(fetchSchema.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setData } = schemaSlice.actions;
export default schemaSlice.reducer;
