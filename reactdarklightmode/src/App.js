import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Technology from "./Pages/Technology";
import { ColorModeContext, useMode } from "./theme";
import {  CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Pages/Navbar";


const App =() => {
    const [theme, colorMode] = useMode();
    return <div>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Navbar></Navbar>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/pages/technology" element={<Technology></Technology>}></Route>
                </Routes>fgf
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>

    </div>;
};

export default App;