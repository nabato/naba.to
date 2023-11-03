import Script from 'next/script'
import localFont from 'next/font/local'
import { ThemeProvider } from '../components/theme-provider'
import { Analytics } from '../components/analytics'
import { ModeToggle } from '../components/mode-toggle'
import { Footer } from '../components/footer'
import React from 'react'
import cn from 'classnames/dedupe'

import './globals.css'

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/MyFontBoldCondensed.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-Bold.woff2',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-Medium.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-HeavyItalic.woff2',
      weight: '900',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-Heavy.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-Italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-Roman.woff2',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-BlackItalic.woff2',
      weight: '900',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-UltraLightItalic.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-ThinItalic.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../public/fonts/MyFontCyr-UltraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../public/fonts/MyFontCyr-Thin.woff2',
      weight: '100',
      style: 'normal'
    }
  ],
  variable: '--my-font'
})

const metadata = {
  title: "Vladislav Nabatov's blog.",
  description: 'Mostly about programming.'
}

export default function RootLayout({ children }) {
  const htmlClass = cn(myFont.variable, 'font-sans')
  const bodyClass = cn(
    'antialiased',
    'min-h-[100svh]',
    'dark:bg-stone-950',
    'selection:bg-[var(--selection-background)]',
    'dark:selection:text-stone-950'
  )
  const topWrapperClass = cn('flex flex-col max-w-2xl mx-auto pt-10 sm:pb-10 px-6 min-h-[100svh]')

  return (
    <html lang="en" className={htmlClass}>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}, {
            page_path: window.location.pathname,
          });
        `
        }}
      />
      <body className={bodyClass}>
        <link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ddc5ab" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className={topWrapperClass}>
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                {/*<nav className="ml-auto text-sm font-medium">*/}
                {/*  <div className="space-x-6 align-middle">*/}
                {/*    <Link className="inline-block h-full" href="/">*/}
                {/*      Home*/}
                {/*    </Link>*/}
                {/*    <Link className="inline-block h-full" href="/about">*/}
                {/*      About*/}
                {/*    </Link>*/}
                {/*  </div>*/}
                {/*</nav>*/}
              </div>
            </header>
            <main className="grow">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
        {/*<Script*/}
        {/*  id={'klipse-settings'}*/}
        {/*  strategy={'beforeInteractive'}*/}
        {/*  dangerouslySetInnerHTML={{*/}
        {/*    __html: `window.klipse_settings = {*/}
        {/*selector_eval_js: '.language-eval-js' // css selector for the html elements you want to klipsify */}
        {/*}`*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<Script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js" />*/}
      </body>
    </html>
  )
}
