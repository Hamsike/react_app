const LOCAL_STORAGE_KEY = 'notes'


export const NoteService = {
    setNotes(notes) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))

        return notes
    },

    getNotes() {
        const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY)
        
        return savedNotes ? JSON.parse(savedNotes) : []
    },

    updateNotes(notes, searchQuery){
        return notes.filter(note => note.title.includes(searchQuery))
    }
}