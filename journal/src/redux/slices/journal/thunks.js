import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../../firebase/config";
import { addNewNote, savingNewNote, setActiveNote, setNotes, setSaving, updatedNote } from "./journalSlice";
import { async } from "@firebase/util";
import { loadNotes } from "../../../helper/loadNotes";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())
        const { uid } = getState().auth;

        const newNote = {
            date: new Date().getTime(),
            title: "",
            body: ""
        }

        const newDocument = doc(collection(FireBaseDB, `${uid}/journal/notes`))
        await setDoc(newDocument, newNote)

        newNote.id = uid

        dispatch(addNewNote(newNote))
        dispatch(setActiveNote(newNote))

    }
}

export const loadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth
        if (!uid) throw new Error("El ID del usuario no existe")
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const startSavedNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const { uid } = getState().auth
        const { activeNote } = getState().journal

        const fireStoreNote = {...activeNote}
        delete fireStoreNote.id;
        const docRef = doc( FireBaseDB , `${uid}/journal/notes/${activeNote.id}`)
        await setDoc( docRef, fireStoreNote, { merge: true })

        dispatch(updatedNote( activeNote ))
    }
}

