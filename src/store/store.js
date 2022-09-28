import { configureStore } from '@reduxjs/toolkit';

import schemaSlice from './SchemaSlice';

export const store = configureStore({
  reducer: {
    schema: schemaSlice,
  },
});
