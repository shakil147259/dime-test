import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ChildrenType,
  ImportantDateType,
  RelationshipShape,
  RelationUpdatePayload,
} from "./types";

const initialState: RelationshipShape = {
  children: [],
  importantDate: [],
  meritalStatus: "",
  nameOfSpouse: "",
};

export const relationshipSlice = createSlice({
  name: "relationshipInfo",
  initialState,
  reducers: {
    updateRelationshipInfo<K extends keyof RelationshipShape>(
      state: RelationshipShape,
      action: PayloadAction<RelationUpdatePayload<K>>
    ) {
      const { key, value } = action.payload;
      state[key] = value;
    },

    addChildren(
      state: RelationshipShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.children.push({
        index,
        childrenName: "",
        dob: "",
      });
    },
    updateChildren(
      state: RelationshipShape,
      action: PayloadAction<Partial<ChildrenType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.children[index] = {
        ...state.children[index],
        ...updates,
      };
    },
    removeChildren(
      state: RelationshipShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.children = state.children.filter(
        (_, itemIndex) => itemIndex !== index
      );
    },

    addImportantDates(
      state: RelationshipShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.importantDate.push({
        index,
        date: "",
        eventName: "",
      });
    },
    updateImportantDates(
      state: RelationshipShape,
      action: PayloadAction<Partial<ImportantDateType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.importantDate[index] = {
        ...state.importantDate[index],
        ...updates,
      };
    },
    removeImportantDates(
      state: RelationshipShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.importantDate = state.importantDate.filter(
        (_, itemIndex) => itemIndex !== index
      );
    },
  },
});

export const {
  updateRelationshipInfo,

  addChildren,
  updateChildren,
  removeChildren,

  addImportantDates,
  updateImportantDates,
  removeImportantDates,
} = relationshipSlice.actions;

export default relationshipSlice.reducer;
