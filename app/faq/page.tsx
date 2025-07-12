import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FAQ - Bit Chat Offline Bluetooth Chat App',
  description: 'Frequently asked questions about Bit Chat. Learn about offline messaging, Bluetooth mesh networking, security, privacy, and how to use Bit Chat.',
  keywords: 'bit chat faq, offline chat questions, bluetooth mesh faq, bit chat help, privacy chat questions',
  openGraph: {
    title: 'FAQ - Bit Chat Offline Bluetooth Chat App',
    description: 'Frequently asked questions about Bit Chat. Learn about offline messaging, Bluetooth mesh networking, and more.',
  },
}

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is Bit Chat?',
      answer: 'Bit Chat is an offline messaging app that uses Bluetooth Low Energy (BLE) mesh networking to enable communication without internet connectivity. It allows users to send messages, share files, and stay connected even when traditional networks are unavailable.'
    },
    {
      question: 'How does Bit Chat work without internet?',
      answer: 'Bit Chat uses Bluetooth Low Energy mesh networking technology. When you send a message, it hops through nearby devices in the mesh network until it reaches the intended recipient. This creates an extended communication range without requiring internet connectivity.'
    },
    {
      question: 'Is Bit Chat secure and private?',
      answer: 'Yes! Bit Chat uses end-to-end encryption by default, meaning only you and your intended recipient can read your messages. The app is open source, has no central servers, and doesn\'t collect or store any user data.'
    },
    {
      question: 'What devices are supported?',
      answer: 'Bit Chat is available on iOS, Android, and desktop platforms (Windows, macOS, Linux). The app works seamlessly across different devices and operating systems.'
    },
    {
      question: 'How far can messages travel?',
      answer: 'The range depends on the density of devices in the mesh network. With just two devices, the range is typically 30-100 meters. With multiple devices forming a mesh, messages can travel much further by hopping through intermediate devices.'
    },
    {
      question: 'Does Bit Chat drain my battery?',
      answer: 'Bit Chat is optimized for battery efficiency. It uses Bluetooth Low Energy, which consumes minimal power. The app includes smart scanning and power management features to maximize battery life.'
    },
    {
      question: 'Can I share files and media?',
      answer: 'Yes! Bit Chat supports file sharing including photos, videos, documents, and other file types. Files are encrypted and can be shared through the mesh network with progress tracking.'
    },
    {
      question: 'How do group chats work?',
      answer: 'Group chats in Bit Chat work similarly to other messaging apps but through the mesh network. Messages are delivered to all group members within range, and the group can have unlimited members.'
    },
    {
      question: 'What happens if someone is out of range?',
      answer: 'If a recipient is out of range, messages will be stored locally and delivered when they come back into range. The app will show delivery status so you know when your message has been received.'
    },
    {
      question: 'Is Bit Chat free to use?',
      answer: 'Yes, Bit Chat is completely free to use. There are no subscription fees, in-app purchases, or hidden costs. The app is open source and community-driven.'
    },
    {
      question: 'How is Bit Chat different from other messaging apps?',
      answer: 'Unlike traditional messaging apps that require internet connectivity, Bit Chat works completely offline. It also offers superior privacy with end-to-end encryption, no central servers, and no data collection.'
    },
    {
      question: 'Can I use Bit Chat for emergency communication?',
      answer: 'Yes! Bit Chat is perfect for emergency situations when traditional communication networks are down. It can be used during natural disasters, power outages, or in remote areas with poor connectivity.'
    },
    {
      question: 'How do I get started with Bit Chat?',
      answer: 'Simply download the app from the App Store or Google Play Store, create an account, and start chatting! The app will automatically discover nearby devices and form a mesh network.'
    },
    {
      question: 'Is my data stored anywhere?',
      answer: 'No, Bit Chat doesn\'t store any of your data on central servers. Messages are only stored locally on your device and are automatically deleted based on your privacy settings.'
    },
    {
      question: 'Can I use Bit Chat internationally?',
      answer: 'Yes! Bit Chat works worldwide without any regional restrictions. Since it doesn\'t rely on internet connectivity, it works the same way in any country.'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Bit Chat, offline messaging, and Bluetooth mesh networking
            </p>
          </header>

          <section className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-400 transition-colors">
                <h2 className="text-2xl font-bold mb-4 text-green-400">
                  {faq.question}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-2xl p-8 border border-green-400/30">
              <h2 className="text-3xl font-bold mb-6 text-center text-green-400">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 text-center mb-8">
                Can't find what you're looking for? We're here to help!
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Email Support</h3>
                  <p className="text-gray-300">Get help from our support team</p>
                  <a href="mailto:support@bit-chat.in" className="text-green-400 hover:text-green-300">
                    support@bit-chat.in
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💬</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Community</h3>
                  <p className="text-gray-300">Join our community forum</p>
                  <a href="#" className="text-green-400 hover:text-green-300">
                    Community Forum
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Documentation</h3>
                  <p className="text-gray-300">Read our detailed guides</p>
                  <a href="#" className="text-green-400 hover:text-green-300">
                    User Guide
                  </a>
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