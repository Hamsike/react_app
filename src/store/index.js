import { create } from "zustand";
import { createNoteSlice } from "./note/inex";

export const useStore = create((...stateTools) => ({
    ...createNoteSlice(...stateTools)
}))