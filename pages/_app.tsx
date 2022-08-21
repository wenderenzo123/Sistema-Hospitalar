import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "../src/utils/theme"
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Health - Sistema Hospitalar</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
    
  )
}

export default MyApp

