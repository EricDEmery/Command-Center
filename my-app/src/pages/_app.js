import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import { useEffect } from 'react';
import { GlobalStateProvider } from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Bootstrap JavaScript only on the client-side
      require('bootstrap/dist/js/bootstrap.min.js');
    }
  }, []);

  return (
    <>
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
    
    </>
  );
}

export default MyApp;
