export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">What is Bitchat?</h2>
            <p className="about-description">
              Bitchat is a privacy-first messaging platform that works completely offline. 
              Built by Jack Dorsey in a weekend using AI coding assistant 'Goose,' Bitchat 
              lets you chat without WiFi, SIM, or mobile data. It uses Bluetooth LE mesh 
              networking to create peer-to-peer message relay systems.
            </p>
            <div className="about-badges">
              <div className="badge">
                <span className="badge-icon">⚡</span>
                <span className="badge-text">Weekend vibe-coded</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🤖</span>
                <span className="badge-text">AI-assisted by Goose</span>
              </div>
            </div>
          </div>
          <div className="about-logos">
            <div className="logo-grid">
              <div className="logo-item">
                <span className="logo-text">Block</span>
              </div>
              <div className="logo-item">
                <span className="logo-text">Twitter</span>
              </div>
              <div className="logo-item">
                <span className="logo-text">TestFlight</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 