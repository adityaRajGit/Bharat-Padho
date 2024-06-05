import React from 'react'
import styles from './about.module.css'

const Hero: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>
                We're available to assist and address any inquiries you may have. We eagerly await your communication!
          </p>
          <h2>Anshu Singh (Founder & CEO)</h2>
          <h4>Email :- anshusingh@bharatpadho.com</h4>
          <h4>Phone :- +(91)7058252160</h4>
        </div>
      </section>
    </div>
  )
}

export default Hero
