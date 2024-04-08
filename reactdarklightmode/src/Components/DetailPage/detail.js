import React, { useContext, useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ColorModeContext } from "../../theme";
import { ThemeProvider, useTheme } from "@mui/material";
import numeral from "numeral";
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [country]);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                {(countryInfo && countryInfo.countryInfo) && (
                                    <Card sx={{ maxWidth: 345 , padding: 3}}>
                                        <CardActionArea >
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                style={{ backgroundImage: `url(${countryInfo.countryInfo.flag})` }}
                                            />
                                            <CardContent>
                                                <h1>{country}</h1>
                                                <Typography gutterBottom variant="h5" component="div">
                                                Cases: {numeral(countryInfo.cases).format("0,0")}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div">
                                                Recovered: {numeral(countryInfo.recovered).format("0,0")}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div">
                                                Deaths: {numeral(countryInfo.deaths).format("0,0")}
                                                </Typography>

                                                {countryInfo.countryInfo.iso2}
                                                {countryInfo.countryInfo.iso3}

                                               
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>

                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Detail;