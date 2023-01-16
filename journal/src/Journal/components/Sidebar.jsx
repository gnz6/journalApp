import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { width } from "@mui/system"
import { useSelector } from "react-redux"

const Sidebar = ({ drawerWidth }) => {

    const {displayName, photoURL} = useSelector(state=>state.auth)

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth = 240 }, flexShrink: { sm: 0 } }}

        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
                }}
            >

                <Toolbar>
                    {photoURL?.length?
                    <div xs={{borderRadius: "50%" , width:"40px"}}>
                        <img src={photoURL} alt="userPicture"/>
                    </div>
                     : null}
                    <Typography variant="h6" noWrap component="div">
                    {displayName?.length? displayName : null}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ["Enero", "Febrero", "Marzo", "Abril"].map(text => (
                            <ListItem key={text} disableGutters>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={"asdasd asdasdgerg s ad s asdasdasdasds"} />

                                    </Grid>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}

export default Sidebar