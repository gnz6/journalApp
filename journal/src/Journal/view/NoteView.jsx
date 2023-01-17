import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {


    const date  = new Date()

    return (
        <Grid container direction="row" justifyContent={"space-between"} sx={{ mb: 1, mt:5 }}
        className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item >
                <Typography fontSize={39} fontWeight="light"> {date.toDateString()}</Typography>
            </Grid>
            <Grid item >
                <Button color="primary" sx={{ padding: 2 }}>
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
                />

                <TextField
                    type={"text"}
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={5}
                    />
            </Grid>

        <ImageGallery/>

        </Grid>
    )
}
