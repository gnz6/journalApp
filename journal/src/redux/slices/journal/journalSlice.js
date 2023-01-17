import { createSlice } from "@reduxjs/toolkit"

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        activeNote: null
    },
    reducers: {
        savingNewNote:(state)=>{
            state.isSaving = true
        },
        addNewNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false;
        },
        setActiveNote: (state, action) => { 
            state.activeNote = action.payload
        },
        setNotes: (state, action) => {
            state.notes = action.payload
         },
        setSaving: (state, action) => { },
        updateNote: (state, action) => { },
        deleteNote: (state, action) => { },
    }
})

export const { addNewNote, setActiveNote, setNotes, setSaving, updateNote, deleteNote, savingNewNote } = journalSlice.actions