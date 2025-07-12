export default {
  titleTemplate: '%s | Bit Chat',
  defaultTitle: 'Bit Chat - Offline Bluetooth Chat App | Chat Without Internet',
  description: 'Bit Chat is an offline, end-to-end encrypted Bluetooth mesh chat app inspired by Bitchat. Chat without WiFi, SIM, or mobile data using Bluetooth LE mesh networking.',
  canonical: 'https://bit-chat.in',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bit-chat.in',
    siteName: 'Bit Chat',
    title: 'Bit Chat - Offline Bluetooth Chat App',
    description: 'Chat without the internet using Bluetooth mesh networking. Privacy-first, end-to-end encrypted messaging.',
    images: [
      {
        url: 'https://bit-chat.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bit Chat - Offline Bluetooth Chat App',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@bitchat',
    site: '@bitchat',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'bit chat, offline chat, bluetooth mesh, privacy, messaging, decentralized, end-to-end encryption, mesh networking, offline communication',
    },
    {
      name: 'author',
      content: 'Bit Chat Team',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'theme-color',
      content: '#39FF14',
    },
    {
      name: 'msapplication-TileColor',
      content: '#39FF14',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
  },
} 