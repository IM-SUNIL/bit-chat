'use client'

import { useState } from 'react'

export default function Hero() {
  const [buttonText, setButtonText] = useState('Join Beta via TestFlight')

  const handleButtonClick = () => {
    setButtonText('Coming Soon...')
    setTimeout(() => {
      setButtonText('Join Beta via TestFlight')
    }, 2000)
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="mesh-animation"></div>
        <div className="glitch-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div>
            <h1 className="hero-title">
              <span className="title-line">Chat Without the Internet.</span>
              <span className="title-line highlight">Literally.</span>
            </h1>
            <p className="hero-subtitle">
              Bitchat uses Bluetooth-based mesh networking to create a truly serverless, 
              censorship-resistant chat app.
            </p>
            <div className="hero-cta">
              <button className="cta-button disabled" onClick={handleButtonClick}>
                <span className="button-text">{buttonText}</span>
                <span className="button-badge">FULL</span>
              </button>
              <p className="cta-note">iOS beta is currently full • Android coming soon</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="chat-interface">
                <div className="chat-header">
                  <span className="status-indicator online"></span>
                  <span>Mesh Network Active</span>
                </div>
                <div className="chat-messages">
                  <div className="message received">
                    <span className="message-text">Connected to 3 devices</span>
                  </div>
                  <div className="message sent">
                    <span className="message-text">Hello mesh world! 🌐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 