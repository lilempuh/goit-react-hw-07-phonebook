import { createSlice } from '@reduxjs/toolkit';

export const myFilterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = myFilterSlice.actions;

export const getFilter = state => state.filter.value;
