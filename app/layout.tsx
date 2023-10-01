import Link from "next/link"
import "./globals.css"
import {Inter} from "next/font/google"
import {ThemeProvider} from "@/components/theme-provider"
import {Analytics} from "@/components/analytics"
import {ModeToggle} from "@/components/mode-toggle"
import React from "react";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "Vlad Nabatov's blog",
    description: "Mostly about programming"
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (<html lang="en">
    <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
    >
    <link rel="manifest" href="/site.webmanifest"/>
    <meta name="msapplication-config" content="/browserconfig.xml"/>
    <meta name="msapplication-TileColor" content="#ddc5ab" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
                <div className="flex items-center justify-between">
                    <ModeToggle/>
                    <nav className="ml-auto text-sm font-medium space-x-6">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
        </div>
        <Analytics/>
    </ThemeProvider>
    </body>
    </html>
)
}
