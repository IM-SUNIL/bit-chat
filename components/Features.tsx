export default function Features() {
  const features = [
    { icon: '✅', title: 'Works Fully Offline', description: 'No internet connection required' },
    { icon: '🚫', title: 'No Account Needed', description: 'Anonymous by design' },
    { icon: '🔥', title: 'Panic Mode Wipe', description: 'Instant data deletion' },
    { icon: '💬', title: 'IRC Chatrooms & DMs', description: 'Classic chat experience' },
    { icon: '🕵️‍♂️', title: 'Dummy Traffic Obfuscation', description: 'Traffic analysis resistance' },
    { icon: '⏳', title: 'Disappearing Messages', description: 'Auto-delete after time' },
    { icon: '₿', title: 'Bitcoin TX Support', description: 'Coming soon' },
    { icon: '🧠', title: 'Open Source Protocol', description: 'Transparent and auditable' }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 