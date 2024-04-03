import React, { useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ColorModeContext } from "../../theme";
import { ThemeProvider, useTheme } from "@mui/material";
import numeral from "numeral";




function Detail(country) {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
        
	
		
		<div className="info-container">
				<div className="info-confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
				<div className="info-recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
				<div className="info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
				</div>
			
			
		
		
		

           

        </Container>

    </ThemeProvider>
</ColorModeContext.Provider>
  )

}

export default Detail;