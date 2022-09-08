import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "../src/utils/theme"
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Dashboard from './Home/Dashboard';

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Health - Sistema Hospitalar</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link>
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard> 
    </ThemeProvider>

    </>
    
  )
}

export default MyApp

