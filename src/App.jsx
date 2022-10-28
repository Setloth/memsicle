import './App.css'
import { useEffect, useState } from "react"
import { Box, Badge, Menu, MenuItem, Avatar, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import { Menu as MenuIcon } from '@mui/icons-material';

export default function App() {

    const [user, setUser] = useState(null)
    const [menuAnchor, setMenuAnchor] = useState(null)


    useEffect(() => {
        getUserInfo().then(data => {
            setUser(data)
        })

    }, [])



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5, my:1 }}
                    >
                        <Avatar sx={{ width: 48, height: 48 }} src="/favicon.png"/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Memsicle
                    </Typography>
                    {
                        !user
                            ?
                            <Button onClick={LoginWithReplit} color="inherit">Login</Button>
                            :
                            <IconButton onClick={(e) => {
                                setMenuAnchor(e.target)
                            }}><Avatar alt={user.name} src={user.profileImage}/></IconButton>
                    }

                    <Menu
                        anchorEl={menuAnchor}
                        open={!!menuAnchor}
                        onClose={() => {
                            setMenuAnchor(null)

                        }}
                    >
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
