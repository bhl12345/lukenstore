import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | tristen</title>
    </Head>
    <HeroSection /> 
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
