export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="workflow">
          <div className="workflow-step">
            <div className="step-icon">📡</div>
            <h3>BLE Mesh Network</h3>
            <p>Bluetooth Low Energy creates a mesh network between nearby devices</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-icon">🔄</div>
            <h3>Store & Forward</h3>
            <p>Messages hop from device to device using encrypted relay</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-icon">🔐</div>
            <h3>End-to-End Encryption</h3>
            <p>Curve25519 + AES-GCM ensures message security</p>
          </div>
        </div>
        <div className="tech-specs">
          <div className="spec-item">
            <span className="spec-label">Range:</span>
            <span className="spec-value">300m+</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Encryption:</span>
            <span className="spec-value">Curve25519 + AES-GCM</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Channels:</span>
            <span className="spec-value">IRC-style + DMs</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Messages:</span>
            <span className="spec-value">Disappearing + Panic Mode</span>
          </div>
        </div>
      </div>
    </section>
  )
} 