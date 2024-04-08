import React, { useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ColorModeContext } from "../../theme";
import { ThemeProvider, useTheme } from "@mui/material";
import numeral from "numeral";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';




function Detail(countries, countryInfo, cases) {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [countryInf, setCountryInf] = useState([]);
  const { country } = useParams()


  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        const data = await res.json()
        console.log(data)
        setCountryInf(res.data.data)
        console.log(res.data.data)
       
      } catch (error) {
        console.log(error)

      }
    }
    getSingleCountry();

  }, (country))





  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">


          

          {countryInf?.map((country,index) =>
            
            <div key={index}>
              {country}
            

              <div className="info-confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
              <div className="info-recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
              <div className="info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>


            </div>



          )}

          {country}
          {numeral(country.cases).format("0,0")}
          {countryInf.cases}
          {/* {country.countryInfo.flag} */}

          <div className="info-container">
            {/* <div className="info-flag" style={{backgroundImage: `url(${country.countryInfo.flag})`}} /> */}
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