import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme/index';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import Jackpot from '../sections/jackpot';
import CallToAction from '../sections/call-to-action';
import Featured from '../sections/featured';
import Pricing from '../sections/pricing';
import Testimonials from '../sections/testimonials';
import Blogs from '../sections/blogs';
import FAQ from '../sections/faq';
import Subscribe from '../sections/subscribe';
import WhatsApp from '@/components/Whatsapp/WhatsApp';

export default function IndexPage() {
  useEffect(() => {
    
    window.axeptioSettings = {
      clientId: "6382c599bc924f26a7e65525",
    };
     
    (function(d, s) {
      var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
      e.async = true; e.src = "//static.axept.io/sdk.js";
      t.parentNode.insertBefore(e, t);
    })(document, "script");
    
      }, [])
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Webdigital France" />
          <Banner />
          <Services />
          <Jackpot />
          <CallToAction />
          <Featured />
          <Pricing />
          <Testimonials />
          {/* <Blogs /> */}
          <FAQ />
          <Subscribe />
          <WhatsApp/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
