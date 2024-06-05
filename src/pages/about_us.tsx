import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../components/Particle';
import Hero from '../components/about_us/about';
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const about_us = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Hero/>
      <Footer />
    </div>
  );
}

export default about_us