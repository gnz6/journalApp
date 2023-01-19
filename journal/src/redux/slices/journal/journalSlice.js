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
        setSaving: (state) => {
            state.isSaving = true
         },
        updatedNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note=> {
                if(note.id === action.payload.id){
                    return action.payload
                }
                return note
            })
         },
        deleteNote: (state, action) => { },
    }
})

export const { addNewNote, setActiveNote, setNotes, setSaving, updatedNote, deleteNote, savingNewNote } = journalSlice.actions