import React from 'react';
// import styled from 'styled-components';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import About from '../components/About';

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
