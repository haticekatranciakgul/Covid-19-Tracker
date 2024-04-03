import React, { useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ColorModeContext } from "../theme";
import { ThemeProvider, useTheme } from "@mui/material";
import { useState, useEffect } from 'react';
import './Style.css';

import { MenuItem, FormControl, Select } from "@material-ui/core";

import InfoBox from '../Components/InfoBox/InfoBox';
import Map from '../Components/Map/Map'
import { sortData, prettyPrintStat } from './util';
import "leaflet/dist/leaflet.css"




const AppCovid = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4797 });
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [caseType, setCasesType] = useState("cases");

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data)
            })
    }, [])
    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2
                        }
                    ));
                    const sortedData = sortData(data);
                    console.log(sortedData);
                    setCountries(countries);
                    setMapCountries(data);
                });
        };
        getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        const url = countryCode === 'worldwide' ? 'https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryCode);
                setCountryInfo(data);
                setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                setMapZoom(4);
            })
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">


                    <div className="app__left">
                        {/* Heading */}

                        <div className="app__header">
                            <h1>COVID-19 TRACKER </h1>
                            <FormControl className="app__dropdown">
                                <Select
                                    variant="outlined"
                                    onChange={onCountryChange}
                                    value={country}
                                >
                                    <MenuItem value="worldwide">Worldwide</MenuItem>
                                    {countries.map((country) => (
                                        <MenuItem value={country.value}>{country.name}</MenuItem>

                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        {/* Stats */}
                        <div className="app__stats">
                            <InfoBox isRed active={caseType === "cases"} onClick={e => setCasesType('cases')} title="Coronavirus Cases" total={prettyPrintStat(countryInfo.cases)} cases={prettyPrintStat(countryInfo.todayCases)} />
                            <InfoBox active={caseType === "recovered"} onClick={e => setCasesType('recovered')} title="Recovered" total={prettyPrintStat(countryInfo.recovered)} cases={prettyPrintStat(countryInfo.todayRecovered)} />
                            <InfoBox isRed active={caseType === "deaths"} onClick={e => setCasesType('deaths')} title="Deaths" total={prettyPrintStat(countryInfo.deaths)} cases={prettyPrintStat(countryInfo.todayDeaths)} />
                        </div>
                        <Map casesType={caseType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
                    </div>

                   

                </Container>

            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}


export default AppCovid;