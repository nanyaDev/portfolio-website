import React from 'react';
// import styled from 'styled-components';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </Layout>
  );
};

export default IndexPage;
