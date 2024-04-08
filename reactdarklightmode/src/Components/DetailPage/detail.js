import React, { useContext, useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ColorModeContext } from "../../theme";
import { ThemeProvider, useTheme } from "@mui/material";
import numeral from "numeral";
import { useParams } from 'react-router-dom';

function Detail() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [countryInfo, setCountryInfo] = useState({});
  const { country } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
        const data = await response.json();
        setCountryInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [country]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          {(countryInfo && countryInfo.countryInfo) && (
            <div className="info-container">
              <div className="info-flag" style={{ backgroundImage: `url(${countryInfo.countryInfo.flag})` }} />
              <div className="info-confirmed">Cases: {numeral(countryInfo.cases).format("0,0")}</div>
              <div className="info-recovered">Recovered: {numeral(countryInfo.recovered).format("0,0")}</div>
              <div className="info-deaths">Deaths: {numeral(countryInfo.deaths).format("0,0")}</div>
            </div>
          )}
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Detail;