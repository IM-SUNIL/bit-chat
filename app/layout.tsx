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
  title: 'Bitchat - Chat Without the Internet. Literally. | Jack Dorsey\'s Offline Mesh Chat App',
  description: 'Download Bitchat – Offline Mesh Chat App by Jack Dorsey. Chat without internet using Bluetooth mesh networking. Privacy-first, censorship-resistant messaging.',
  keywords: 'bitchat, jack dorsey, offline chat, bluetooth mesh, privacy, messaging, decentralized',
  authors: [{ name: 'Bit-Chat.in' }],
  openGraph: {
    title: 'Bitchat - Chat Without the Internet. Literally.',
    description: 'Privacy-first messaging platform that works completely offline using Bluetooth mesh networking.',
    type: 'website',
    url: 'https://bit-chat.in',
    siteName: 'Bitchat',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bitchat - Offline Mesh Chat App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitchat - Offline Mesh Chat',
    description: 'Chat without WiFi, SIM, or mobile data using Bluetooth LE mesh networking.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bit-chat.in',
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