import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - Bit Chat Offline Bluetooth Chat App',
  description: 'Read the latest news, updates, and insights about Bit Chat, offline messaging, Bluetooth mesh networking, and privacy-first communication.',
  keywords: 'bit chat blog, offline messaging news, bluetooth mesh blog, privacy chat articles, bit chat updates',
  openGraph: {
    title: 'Blog - Bit Chat Offline Bluetooth Chat App',
    description: 'Read the latest news, updates, and insights about Bit Chat and offline messaging.',
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Offline Communication: Why Bit Chat is Revolutionizing Messaging',
      excerpt: 'Discover how Bit Chat is changing the way we think about communication in a world that\'s increasingly dependent on internet connectivity.',
      content: `
        <p>In today's hyperconnected world, we've become so dependent on internet connectivity that we often forget what happens when it's not available. Natural disasters, power outages, network failures, or simply being in remote areas can leave us completely cut off from communication.</p>
        
        <p>This is where Bit Chat comes in. Our revolutionary offline messaging app uses Bluetooth Low Energy (BLE) mesh networking to enable communication without requiring any internet connectivity. But what makes this technology so special, and why should you care?</p>
        
        <h2>The Problem with Traditional Messaging</h2>
        <p>Traditional messaging apps like WhatsApp, Telegram, or Signal all require internet connectivity to function. When the internet goes down, these apps become useless. This creates a critical vulnerability in our communication infrastructure.</p>
        
        <p>Consider these scenarios:</p>
        <ul>
          <li>Natural disasters that damage communication infrastructure</li>
          <li>Power outages that affect cellular networks</li>
          <li>Remote areas with poor or no cellular coverage</li>
          <li>Government-imposed internet shutdowns</li>
          <li>Network congestion during large events</li>
        </ul>
        
        <h2>How Bit Chat Solves This</h2>
        <p>Bit Chat uses Bluetooth Low Energy mesh networking to create a decentralized communication network. Here's how it works:</p>
        
        <ol>
          <li><strong>Device Discovery:</strong> Bit Chat automatically discovers nearby devices using Bluetooth LE</li>
          <li><strong>Mesh Formation:</strong> Devices form a mesh network, extending communication range through relay nodes</li>
          <li><strong>Message Routing:</strong> Messages hop through multiple devices to reach distant recipients</li>
          <li><strong>End-to-End Encryption:</strong> All messages are encrypted, ensuring privacy and security</li>
        </ol>
        
        <h2>Real-World Applications</h2>
        <p>The applications for Bit Chat are endless:</p>
        
        <h3>Emergency Communication</h3>
        <p>During natural disasters or emergencies, traditional communication networks often fail. Bit Chat provides a reliable backup communication method that works independently of infrastructure.</p>
        
        <h3>Remote Areas</h3>
        <p>For people living or working in remote areas with poor cellular coverage, Bit Chat offers a way to stay connected with nearby communities.</p>
        
        <h3>Privacy-Conscious Users</h3>
        <p>For users concerned about surveillance or data collection, Bit Chat provides a truly private communication method with no central servers or data collection.</p>
        
        <h3>Event Coordination</h3>
        <p>At large events, festivals, or conferences, network congestion can make traditional messaging unreliable. Bit Chat works regardless of network conditions.</p>
        
        <h2>The Technology Behind Bit Chat</h2>
        <p>Bit Chat leverages several cutting-edge technologies:</p>
        
        <ul>
          <li><strong>Bluetooth Low Energy (BLE):</strong> Energy-efficient wireless communication</li>
          <li><strong>Mesh Networking:</strong> Multi-hop message routing for extended range</li>
          <li><strong>End-to-End Encryption:</strong> Military-grade encryption for message security</li>
          <li><strong>Cross-Platform Compatibility:</strong> Works on iOS, Android, and desktop</li>
        </ul>
        
        <h2>Privacy and Security</h2>
        <p>Unlike traditional messaging apps that store your data on central servers, Bit Chat operates on a completely decentralized model:</p>
        
        <ul>
          <li>No central servers to hack or subpoena</li>
          <li>No data collection or user profiling</li>
          <li>Messages are only stored locally on your device</li>
          <li>Open source code for transparency and auditability</li>
        </ul>
        
        <h2>Looking Forward</h2>
        <p>As we continue to develop Bit Chat, we're working on several exciting features:</p>
        
        <ul>
          <li>Enhanced mesh networking algorithms for better range and reliability</li>
          <li>Advanced file sharing capabilities</li>
          <li>Integration with IoT devices for expanded mesh networks</li>
          <li>Improved battery optimization</li>
          <li>Enhanced privacy controls and features</li>
        </ul>
        
        <h2>Join the Revolution</h2>
        <p>The future of communication is here, and it doesn't require the internet. Bit Chat represents a fundamental shift in how we think about connectivity and communication.</p>
        
        <p>Whether you're concerned about privacy, live in an area with poor connectivity, or simply want a reliable backup communication method, Bit Chat has something to offer.</p>
        
        <p>Download Bit Chat today and experience the future of offline communication. Join thousands of users who have already discovered the freedom of internet-independent messaging.</p>
      `,
      author: 'Bit Chat Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['offline messaging', 'bluetooth mesh', 'privacy', 'technology']
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Bit Chat Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest news, updates, and insights about offline messaging and privacy-first communication
            </p>
          </header>

          <section className="max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
                <header className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
                    {post.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>By {post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </header>

                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <footer className="mt-8 pt-8 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </footer>
              </article>
            ))}
          </section>

          <section className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-2xl p-8 border border-green-400/30">
              <h2 className="text-3xl font-bold mb-6 text-center text-green-400">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 text-center mb-8">
                Subscribe to our newsletter for the latest updates and insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <button className="bg-green-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
} 