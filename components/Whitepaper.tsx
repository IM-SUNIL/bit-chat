export default function Whitepaper() {
  return (
    <section className="whitepaper" id="whitepaper">
      <div className="container">
        <h2 className="section-title">Technical Whitepaper</h2>
        <div className="whitepaper-content">
          <div className="whitepaper-section">
            <h3>Protocol Stack</h3>
            <div className="code-block">
              <pre><code>Application Layer: Bitchat Protocol
Transport Layer: Bluetooth LE Mesh
Network Layer: Peer-to-Peer Relay
Security Layer: Curve25519 + AES-GCM
Physical Layer: Bluetooth 5.0+</code></pre>
            </div>
          </div>
          <div className="whitepaper-section">
            <h3>Encryption Details</h3>
            <ul className="tech-list">
              <li>Key Exchange: X25519 (Curve25519)</li>
              <li>Message Encryption: AES-256-GCM</li>
              <li>Perfect Forward Secrecy: Yes</li>
              <li>Post-Quantum Resistance: Planned</li>
            </ul>
          </div>
          <div className="whitepaper-section">
            <h3>Future Upgrades</h3>
            <ul className="tech-list">
              <li>Wi-Fi Direct mesh networking</li>
              <li>QR code channel joining</li>
              <li>Offline Bitcoin transaction support</li>
              <li>Cross-platform compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 