import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../components/react-datepicker2.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
