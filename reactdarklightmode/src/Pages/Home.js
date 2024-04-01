import React, { useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import { ColorModeContext } from "../theme";
import { ThemeProvider, useTheme } from "@mui/material";


const sections = [
  { title: 'Covid-19 Project', url: '/pages/technology' },

];

const mainFeaturedPost = {
  title: 'COVİD-19 TRACKER PROJECT',
  description: "Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance. The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.",
  image: 'https://source.unsplash.com/random?covid19',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};



const Home = () => {
  const theme = useTheme();
  //    const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="COVİD-19 TRACKER PROJECT" sections={sections} />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
          </main>
        </Container>
        <Footer
          title="Footer"
          description="FRONT-END DEVELOPER HATICE AKGUL"
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )

}

export default Home;