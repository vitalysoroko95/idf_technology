import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  validateSchema: {},
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.validateSchema = action.payload;
    },
  },
});

export const { setData } = schemaSlice.actions;
export default schemaSlice.reducer;
