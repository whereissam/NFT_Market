import '../styles/globals.css';
import Script from 'next/script';

import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/02244f3392.js" crossOrigin="anonymous" />
  </ThemeProvider>

);

export default MyApp;
