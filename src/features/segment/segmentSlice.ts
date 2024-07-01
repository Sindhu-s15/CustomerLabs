
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schema {
  label: string;
  value: string;
}

interface SegmentState {
  segmentName: string;
  schemas: Schema[];
}

const initialState: SegmentState = {
  segmentName: '',
  schemas: [],
};

const segmentSlice = createSlice({
  name: 'segment',
  initialState,
  reducers: {
    setSegmentName: (state, action: PayloadAction<string>) => {
      state.segmentName = action.payload;
    },
    addSchema: (state, action: PayloadAction<Schema>) => {
      state.schemas.push(action.payload);
    },
    removeSchema: (state, action: PayloadAction<string>) => {
      state.schemas = state.schemas.filter(schema => schema.value !== action.payload);
    },
    resetSegment: (state) => {
      state.segmentName = '';
      state.schemas = [];
    }
  }
});

export const { setSegmentName, addSchema, removeSchema, resetSegment } = segmentSlice.actions;

export default segmentSlice.reducer;
