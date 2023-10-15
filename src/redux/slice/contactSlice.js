import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getThunk, addThunk, deleteThunk } from 'services/fetchContacts';

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const addContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const deleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // state.items = state.items.filter(item => item.id !== action.payload);

  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(getThunk.fulfilled, handleFulfilled)
      .addCase(addThunk.fulfilled, addContactFulfilled)
      .addCase(deleteThunk.fulfilled, deleteContactFulfilled)
      .addMatcher(
        isAnyOf(getThunk.pending, addThunk.pending, deleteThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getThunk.rejected, addThunk.rejected, deleteThunk.rejected),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
