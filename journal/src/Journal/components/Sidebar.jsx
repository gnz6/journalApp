import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

const Sidebar = ({ drawerWidth }) => {
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
                    <Typography variant="h6" noWrap component="div">
                        Gonzalo Pirovano
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