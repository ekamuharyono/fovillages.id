import AOS from 'aos';
import '@/styles/globals.css'
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />
}
