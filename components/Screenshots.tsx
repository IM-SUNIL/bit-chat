export default function Screenshots() {
  const screenshots = [
    { icon: '💬', text: 'Chat UI' },
    { icon: '📡', text: 'Bluetooth Device Map' },
    { icon: '🚨', text: 'Panic Mode' },
    { icon: '📋', text: 'IRC Channel Browser' }
  ]

  return (
    <section className="screenshots" id="screenshots">
      <div className="container">
        <h2 className="section-title">Screenshots</h2>
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-card">
              <div className="screenshot-placeholder">
                <span className="placeholder-icon">{screenshot.icon}</span>
                <span className="placeholder-text">{screenshot.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 