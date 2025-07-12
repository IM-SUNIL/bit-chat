import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Features - Bit Chat Offline Bluetooth Chat App',
  description: 'Explore Bit Chat features: offline messaging, Bluetooth mesh networking, end-to-end encryption, file sharing, and privacy-first design.',
  keywords: 'bit chat features, offline messaging features, bluetooth mesh features, encrypted chat features',
  openGraph: {
    title: 'Features - Bit Chat Offline Bluetooth Chat App',
    description: 'Explore Bit Chat features: offline messaging, Bluetooth mesh networking, end-to-end encryption, and more.',
  },
}

export default function FeaturesPage() {
  const features = [
    {
      icon: '🔒',
      title: 'End-to-End Encryption',
      description: 'All messages are encrypted using military-grade encryption. Only you and your intended recipient can read your messages.',
      details: ['AES-256 encryption', 'Perfect forward secrecy', 'No backdoors', 'Open source cryptography']
    },
    {
      icon: '🌐',
      title: 'Offline Communication',
      description: 'Chat without internet, WiFi, or cellular data. Bit Chat works completely offline using Bluetooth mesh networking.',
      details: ['No internet required', 'Bluetooth LE mesh', 'Extended range', 'Automatic reconnection']
    },
    {
      icon: '📡',
      title: 'Mesh Networking',
      description: 'Messages hop through multiple devices to reach distant recipients, extending your communication range significantly.',
      details: ['Multi-hop routing', 'Automatic pathfinding', 'Load balancing', 'Fault tolerance']
    },
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Available on iOS, Android, and desktop platforms. Chat seamlessly across different devices and operating systems.',
      details: ['iOS app', 'Android app', 'Desktop client', 'Web interface']
    },
    {
      icon: '📁',
      title: 'File Sharing',
      description: 'Share photos, videos, documents, and other files securely through the mesh network.',
      details: ['Multiple file types', 'Compression', 'Resume capability', 'Progress tracking']
    },
    {
      icon: '👥',
      title: 'Group Chats',
      description: 'Create group conversations with multiple participants. Perfect for team coordination and event planning.',
      details: ['Unlimited members', 'Admin controls', 'Message history', 'File sharing']
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Get notified when messages arrive, with customizable notification settings and privacy controls.',
      details: ['Custom sounds', 'Vibration patterns', 'Do not disturb', 'Priority contacts']
    },
    {
      icon: '🎨',
      title: 'Dark Mode',
      description: 'Easy on the eyes with beautiful dark themes and customizable appearance options.',
      details: ['Multiple themes', 'Custom colors', 'Auto-switching', 'Accessibility support']
    },
    {
      icon: '⚡',
      title: 'Battery Optimized',
      description: 'Designed to be battery-efficient, using minimal power while maintaining reliable connectivity.',
      details: ['Low power mode', 'Smart scanning', 'Background optimization', 'Power monitoring']
    },
    {
      icon: '🛡️',
      title: 'Privacy Controls',
      description: 'Complete control over your privacy with granular settings for visibility, discovery, and data retention.',
      details: ['Invisible mode', 'Selective sharing', 'Auto-delete', 'Privacy reports']
    },
    {
      icon: '🌍',
      title: 'Global Compatibility',
      description: 'Works worldwide without regional restrictions or censorship. Your communication, your rules.',
      details: ['No geo-blocking', 'Censorship resistant', 'Universal standards', 'Local regulations']
    },
    {
      icon: '🔧',
      title: 'Developer Friendly',
      description: 'Open source and extensible, with APIs for developers to build custom integrations and features.',
      details: ['Open source', 'API access', 'Plugin system', 'Community contributions']
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Bit Chat Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make Bit Chat the ultimate offline communication platform
            </p>
          </header>

          <section className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-green-400">{feature.title}</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="text-green-400 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-2xl p-8 border border-green-400/30">
              <h2 className="text-3xl font-bold mb-6 text-center text-green-400">
                Why Choose Bit Chat?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Privacy & Security</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• End-to-end encryption by default</li>
                    <li>• No data collection or tracking</li>
                    <li>• Open source and auditable</li>
                    <li>• No central servers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Reliability</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Works without internet</li>
                    <li>• Mesh network redundancy</li>
                    <li>• Automatic reconnection</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-400">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Download Bit Chat today and experience the future of offline communication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-green-300 transition-colors">
                Download for iOS
              </button>
              <button className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-300 transition-colors">
                Download for Android
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
} 