import Navbar from './Components/1-Navbar/Navbar'
import Swiper from './Components/2-HomePage/SwiperC'
import HeaderNav from './Components/1-Navbar/HeaderNav'
import './App.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';




function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: cyan[700],
        main1: '#000000',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <Swiper /> */}
    </ThemeProvider>
    </>
  )
}

export default App
