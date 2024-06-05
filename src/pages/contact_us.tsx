import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import HomeNewsLetter from "../components/home/newsletter";
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Hero from './about_us_part'

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
      <HomeNewsLetter/>
      <Footer />
    </div>
  );
}

export default about_us