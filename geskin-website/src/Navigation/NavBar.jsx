import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

/** NavBar: Full-width navigation bar at the top of the app */

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: "darkslategrey", boxShadow: "0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.2)" }}
        >
            <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <Typography
                    variant="h6"
                    noWrap
                    onClick={() => navigate('/')}
                    sx={{
                        fontFamily: 'Inter',
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        letterSpacing: ".1rem",
                        textDecoration: "none",
                        paddingX: "10px",
                        cursor: "pointer",
                        background: "whitesmoke",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Ehretz Geskin
                </Typography>

                {/* Nav Links */}
                <Box sx={{ display: "flex", gap: 3, mr: 2 }}>
                    <Button onClick={() => navigate('/')} sx={{ color: "lightblue", "&:hover": { color: "lightpink" } }}>Home</Button>
                    <Button onClick={() => navigate('/about')} sx={{ color: "lightblue", "&:hover": { color: "lightpink" } }}>About Me</Button>
                    <Button onClick={() => navigate('/projects')} sx={{ color: "lightblue", "&:hover": { color: "lightpink" } }}>Projects</Button>
                    <Button onClick={() => navigate('/contact')} sx={{ color: "lightblue", "&:hover": { color: "lightpink" } }}>Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;