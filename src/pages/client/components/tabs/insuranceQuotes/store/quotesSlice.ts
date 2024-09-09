import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesType, QuotesShape } from "./types";

const initialState: QuotesShape = {
  notes: [],
};

const quotesInfoSlice = createSlice({
  name: "quotesInfo",
  initialState,
  reducers: {
    addNote(state: QuotesShape, action: PayloadAction<{ index: number }>) {
      const { index } = action.payload;
      state.notes.push({
        index,
        date: "",
        note: "",
      });
    },
    updateNote(
      state: QuotesShape,
      action: PayloadAction<Partial<NotesType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.notes[index] = {
        ...state.notes[index],
        ...updates,
      };
    },
    removeNote(state: QuotesShape, action: PayloadAction<{ index: number }>) {
      const { index } = action.payload;
      state.notes = state.notes.filter((_, itemIndex) => itemIndex !== index);
    },
  },
});

export const { addNote, updateNote, removeNote } = quotesInfoSlice.actions;
export default quotesInfoSlice.reducer;
