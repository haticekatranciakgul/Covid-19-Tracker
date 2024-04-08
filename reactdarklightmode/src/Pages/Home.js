import React, { useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';
import { ColorModeContext } from "../theme";
import { ThemeProvider, useTheme } from "@mui/material";


const sections = [
  { title: 'Covid-19 Project', url: '/appcovid' },

];

const mainFeaturedPost = {
  title: 'COVİD-19 TRACKER PROJECT',
  description: "Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. ",
  image: 'https://source.unsplash.com/random?covid19',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};



const Home = () => {
  const theme = useTheme();
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