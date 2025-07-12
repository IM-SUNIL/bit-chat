import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bit-chat.in'),
  title: 'Bit Chat - Offline Bluetooth Chat App | Chat Without Internet',
  description: 'Bit Chat is an offline, end-to-end encrypted Bluetooth mesh chat app. Chat without WiFi, SIM, or mobile data using Bluetooth LE mesh networking. Privacy-first messaging.',
  keywords: 'bit chat, offline chat, bluetooth mesh, privacy, messaging, decentralized, end-to-end encryption, mesh networking, offline communication',
  authors: [{ name: 'Bit Chat Team' }],
  creator: 'Bit Chat Team',
  publisher: 'Bit Chat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Bit Chat - Offline Bluetooth Chat App',
    description: 'Chat without the internet using Bluetooth mesh networking. Privacy-first, end-to-end encrypted messaging.',
    type: 'website',
    url: 'https://bit-chat.in',
    siteName: 'Bit Chat',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bit Chat - Offline Bluetooth Chat App',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bit Chat - Offline Bluetooth Chat App',
    description: 'Chat without WiFi, SIM, or mobile data using Bluetooth LE mesh networking.',
    images: ['/og-image.png'],
    creator: '@bitchat',
    site: '@bitchat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bit-chat.in',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪐</text></svg>" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  )
} 