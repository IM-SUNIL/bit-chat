import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bit Chat vs Other Offline Chat Apps - Comparison',
  description: 'Compare Bit Chat with Bitchat, FireChat, Bridgefy and other offline messaging apps. See why Bit Chat leads in privacy, security, and mesh networking.',
  keywords: 'bit chat vs bitchat, offline chat comparison, firechat vs bit chat, bridgefy comparison, mesh networking apps',
  openGraph: {
    title: 'Bit Chat vs Other Offline Chat Apps - Comparison',
    description: 'Compare Bit Chat with Bitchat, FireChat, Bridgefy and other offline messaging apps.',
  },
}

export default function ComparisonPage() {
  const apps = [
    {
      name: 'Bit Chat',
      logo: '🪐',
      pros: [
        'Advanced Bluetooth LE mesh networking',
        'End-to-end encryption by default',
        'Cross-platform (iOS, Android, Desktop)',
        'Open source and auditable',
        'No central servers',
        'Extended range through mesh',
        'File sharing support',
        'Group chats with unlimited members',
        'Battery optimized',
        'Privacy-first design'
      ],
      cons: [
        'Newer platform',
        'Smaller user base'
      ],
      rating: 5,
      isHighlighted: true
    },
    {
      name: 'Bitchat',
      logo: '💬',
      pros: [
        'Original offline messaging concept',
        'Simple interface',
        'Basic mesh networking',
        'Open source'
      ],
      cons: [
        'Limited to specific hardware',
        'No mobile apps',
        'Basic encryption',
        'Limited range',
        'No file sharing',
        'No group chats'
      ],
      rating: 3
    },
    {
      name: 'FireChat',
      logo: '🔥',
      pros: [
        'Established user base',
        'Simple setup',
        'Basic offline functionality'
      ],
      cons: [
        'Limited to iOS and Android',
        'No mesh networking',
        'Basic encryption',
        'Centralized servers',
        'Limited range',
        'No file sharing',
        'Privacy concerns'
      ],
      rating: 2
    },
    {
      name: 'Bridgefy',
      logo: '🌉',
      pros: [
        'Mesh networking',
        'Cross-platform',
        'File sharing',
        'Group chats'
      ],
      cons: [
        'Centralized servers',
        'Privacy concerns',
        'Limited encryption',
        'Subscription model',
        'No open source',
        'Limited range'
      ],
      rating: 3
    }
  ]

  const features = [
    'Offline Messaging',
    'Mesh Networking',
    'End-to-End Encryption',
    'Cross-Platform',
    'File Sharing',
    'Group Chats',
    'Open Source',
    'No Central Servers',
    'Privacy Focused',
    'Battery Optimized'
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Bit Chat vs The Competition
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Bit Chat compares to other offline messaging apps in terms of features, privacy, and security
            </p>
          </header>

          {/* Feature Comparison Table */}
          <section className="max-w-6xl mx-auto mb-16">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-4 text-green-400 font-bold">Features</th>
                    {apps.map((app) => (
                      <th key={app.name} className={`text-center p-4 ${app.isHighlighted ? 'text-green-400' : 'text-gray-300'}`}>
                        <div className="flex flex-col items-center">
                          <span className="text-2xl mb-2">{app.logo}</span>
                          <span className="font-bold">{app.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature) => (
                    <tr key={feature} className="border-b border-gray-800">
                      <td className="p-4 font-semibold text-gray-300">{feature}</td>
                      {apps.map((app) => (
                        <td key={`${app.name}-${feature}`} className="text-center p-4">
                          {app.pros.includes(feature) ? (
                            <span className="text-green-400 text-2xl">✓</span>
                          ) : (
                            <span className="text-red-400 text-2xl">✗</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed App Reviews */}
          <section className="max-w-6xl mx-auto space-y-8">
            {apps.map((app) => (
              <div key={app.name} className={`bg-gray-900 rounded-2xl p-8 border ${app.isHighlighted ? 'border-green-400' : 'border-gray-800'}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{app.logo}</span>
                    <div>
                      <h2 className={`text-3xl font-bold ${app.isHighlighted ? 'text-green-400' : 'text-white'}`}>
                        {app.name}
                      </h2>
                      <div className="flex items-center space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-xl ${i < app.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                            ★
                          </span>
                        ))}
                        <span className="text-gray-400 ml-2">({app.rating}/5)</span>
                      </div>
                    </div>
                  </div>
                  {app.isHighlighted && (
                    <span className="bg-green-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-400">Pros</h3>
                    <ul className="space-y-2">
                      {app.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">✓</span>
                          <span className="text-gray-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-400">Cons</h3>
                    <ul className="space-y-2">
                      {app.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-400 mr-2 mt-1">✗</span>
                          <span className="text-gray-300">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Why Choose Bit Chat */}
          <section className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-2xl p-8 border border-green-400/30">
              <h2 className="text-3xl font-bold mb-6 text-center text-green-400">
                Why Bit Chat Leads the Pack
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Privacy First</h3>
                  <p className="text-gray-300">Only Bit Chat offers true end-to-end encryption with no central servers or data collection.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📡</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Advanced Mesh</h3>
                  <p className="text-gray-300">Our Bluetooth LE mesh networking extends range and reliability beyond competitors.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Universal Access</h3>
                  <p className="text-gray-300">Cross-platform support ensures you can communicate regardless of device or OS.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-400">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who've already switched to Bit Chat
            </p>
            <button className="bg-green-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-green-300 transition-colors">
              Download Bit Chat Now
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
} 