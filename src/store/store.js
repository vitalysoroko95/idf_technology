import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './DataSlice';
import schemaSlice from './SchemaSlice';

export const store = configureStore({
  reducer: {
    schema: schemaSlice,
    data: dataSlice,
  },
});
