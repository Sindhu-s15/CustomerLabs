
import { configureStore } from '@reduxjs/toolkit';
import segmentReducer from '../features/segment/segmentSlice';

export const store = configureStore({
  reducer: {
    segment: segmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
