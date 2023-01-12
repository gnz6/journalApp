import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../view/NoteView'
import { NothingSelecterView } from '../view/NothingSelecterView'
import { AddOutlined } from '@mui/icons-material'



export const Home = () => {
  return (
    <JournalLayout>
      <NothingSelecterView/>
        
      <NoteView/>

      <IconButton
      
        size='large'
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 40, 
          bottom: 30,
          zIndex:10,
          padding: 2
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}
