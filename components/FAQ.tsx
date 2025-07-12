'use client'

import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Does it work without internet?',
      answer: 'Yes, completely offline over Bluetooth Mesh.'
    },
    {
      question: 'Can I send files?',
      answer: 'Not in the current version.'
    },
    {
      question: 'Is my data safe?',
      answer: 'All messages are end-to-end encrypted using Curve25519 and AES-256.'
    },
    {
      question: 'Can I join the beta?',
      answer: 'iOS beta is currently full; Android is coming soon.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 