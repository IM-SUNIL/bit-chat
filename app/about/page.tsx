import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Bit Chat - Offline Bluetooth Chat App',
  description: 'Learn about Bit Chat, the revolutionary offline Bluetooth mesh chat app that lets you communicate without internet. Privacy-first, end-to-end encrypted messaging.',
  keywords: 'about bit chat, offline messaging, bluetooth mesh networking, privacy chat app',
  openGraph: {
    title: 'About Bit Chat - Offline Bluetooth Chat App',
    description: 'Learn about Bit Chat, the revolutionary offline Bluetooth mesh chat app that lets you communicate without internet.',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              About Bit Chat
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing communication with offline Bluetooth mesh networking
            </p>
          </header>

          <section className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-green-400">What is Bit Chat?</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Bit Chat is a cutting-edge messaging application that enables communication without requiring internet connectivity. 
                Using Bluetooth Low Energy (BLE) mesh networking technology, users can send messages, share files, and stay connected 
                even when traditional communication networks are unavailable.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Inspired by the original Bitchat concept, our app takes offline communication to the next level with enhanced privacy, 
                security, and user experience features designed for the modern world.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We believe that communication should be accessible, secure, and private regardless of infrastructure limitations. 
                Our mission is to provide a reliable messaging platform that works anywhere, anytime, without compromising on security or privacy.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                  <p className="text-gray-400">End-to-end encryption by default</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌐</div>
                  <h3 className="text-xl font-semibold mb-2">Offline Ready</h3>
                  <p className="text-gray-400">Works without internet connection</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-xl font-semibold mb-2">Mesh Network</h3>
                  <p className="text-gray-400">Bluetooth LE mesh networking</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-green-400">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bluetooth Discovery</h3>
                    <p className="text-gray-300">Bit Chat automatically discovers nearby devices using Bluetooth Low Energy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mesh Network Formation</h3>
                    <p className="text-gray-300">Devices form a mesh network, extending communication range through relay nodes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
                    <p className="text-gray-300">Messages are encrypted and routed through the mesh network to recipients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-400">Emergency Communication</h3>
                  <p className="text-gray-300">Stay connected during natural disasters, power outages, or network failures</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-400">Remote Areas</h3>
                  <p className="text-gray-300">Communicate in areas with poor or no cellular coverage</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-400">Privacy-Conscious Users</h3>
                  <p className="text-gray-300">Avoid surveillance and maintain communication privacy</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-400">Event Coordination</h3>
                  <p className="text-gray-300">Coordinate with groups at events, festivals, or conferences</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
} 