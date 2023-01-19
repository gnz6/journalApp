import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setActiveNote } from "../../redux/slices/journal/journalSlice"
import { startSavedNote } from "../../redux/slices/journal/thunks"

export const NoteView = () => {

    const date = new Date()

    const dispatch = useDispatch()
    const { activeNote } = useSelector(state => state.journal)

    const { input, handleInputChange } = useForm( activeNote )

    useEffect(()=>{
         dispatch( setActiveNote(input) )
    },[input])

 const handleSaveNote = () => {
        console.log("active");
        dispatch(startSavedNote())
    }

    return (
        <Grid container direction="row" justifyContent={"space-between"} sx={{ mb: 1, mt: 5 }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item >
                <Typography fontSize={39} fontWeight="light"> {date.toDateString()}</Typography>
            </Grid>
            <Grid item >
                <Button
                 onClick={handleSaveNote}
                color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type={"text"}
                    variant="filled"
                    fullWidth
                    label="Title"
                    placeholder="Insert a Title"
                    sx={{ border: "none", mb: 1 }}
                    value={input.title}
                    onChange={handleInputChange}
                    name="title"
                />

                <TextField
                    type={"text"}
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={5}
                    value={input.body}
                    onChange={handleInputChange}
                    name="body"
                />
            </Grid>

            <ImageGallery />

        </Grid>
    )

}
