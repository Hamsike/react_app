import { NoteService } from "../../services/note";

export const createNoteSlice = (set, get, ...stateTools) => ({
    notes: NoteService.getNotes(),
    addNote: (note) => {
        const updatedNotes = [...NoteService.getNotes(), note]
        
        set({notes: NoteService.setNotes(updatedNotes)})
    },
    setNotes: (notes) => {
        NoteService.setNotes(notes)
        set({ notes })
    },

    getSearchedNotes: (searchQuery) => {
        const notes = get().notes;
       return NoteService.updateNotes(notes, searchQuery);
    }

})