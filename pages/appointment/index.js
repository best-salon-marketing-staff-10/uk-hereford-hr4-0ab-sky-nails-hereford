import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import React, { useEffect } from "react";
import Router from 'next/router';

import FullScreenIframe from '/pages/components/FullScreenIframe';

import { processedInfo } from '/pages/core/info';
import { headerInput } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';

export default function Appointment(){
  if (process.browser){
    document.oncontextmenu = new Function("return false;");
  }

  return (
    <>
        <Head>
          <title>{headerInput.headerTitle}</title>
          <meta name="description" 
            content= {headerInput.metaDescription} />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <link rel="icon" href={headerInput.relIcon} />
          <link rel="canonical" href={headerInput.relCanonical} />
          <link rel="alternate" hrefLang="en" href={headerInput.relCanonical} />
          <link rel="alternate" href={headerInput.relCanonical} hrefLang="x-default" />

          <meta name="geo.position" content={headerInput.metaGeoPosition} />
          <meta name="geo.placename" content={headerInput.metaGeoPlaceName} />
          <meta name="geo.region" content={headerInput.metaGeoRegion} />

          <meta property="og:site_name" content={headerInput.metaOgSiteName} />
          <meta property="og:locale" content={headerInput.metaOgLocale} />
          

          <meta property='og:title' content={headerInput.metaOgTitle} />
          <meta property='og:image' content={headerInput.metaOgImage} />
          <meta property='og:description' 
            content={headerInput.metaDescription} />
          <meta property='og:url' content={headerInput.relCanonical} />
          <meta property='og:image:width' content={headerInput.metaOgImageWidth} />
          <meta property='og:image:height' content={headerInput.metaOgImageHeight} />
          <meta property="og:type" content='website' />

        </Head>
        <div>
          <FullScreenIframe src={changedInfo.linkBookingApp} />
        </div>
    </>
  )
}
