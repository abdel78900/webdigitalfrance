import { useEffect, useState } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import '../sections/banner.css'
import '../components/Whatsapp/whatsapp.css'

export default function CustomApp({ Component, pageProps }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
    setShow(true)
  }, []);

  return (
  show && <Component {...pageProps} />
  )
  
}
