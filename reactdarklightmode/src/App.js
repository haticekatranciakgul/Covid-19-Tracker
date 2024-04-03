import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AppCovid from "./Pages/AppCovid";
import { ColorModeContext, useMode } from "./theme";
import {  CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Pages/Navbar";
import Detail from "./Components/DetailPage/Detail";


const App =() => {
    const [theme, colorMode] = useMode();
    return <div>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/appcovid" element={<AppCovid></AppCovid>}></Route>
                    <Route path="/detail" element={<Detail />} />
                </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>

    </div>;
};

export default App;