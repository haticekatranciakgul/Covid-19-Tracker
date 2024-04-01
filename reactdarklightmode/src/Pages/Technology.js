import React, {useContext} from "react";


import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {ColorModeContext, tokens} from "../theme";
import {ThemeProvider, useTheme} from "@mui/material";




const Technology = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">

        <main>This app is using the dark mode</main>

        </Container>

            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}


export default Technology;