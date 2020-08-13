import React from 'react';

import Layout from '../components/Layout';
import About from '../components/About/AboutPage';
import Section from '../components/Shared/Section/Section';
import SEO from '../components/seo';
import Headline from '../components/Shared/Headline/Headline';

const AboutPage = () => (
  <Layout>
    <SEO title={`About`} />
    <Section style={{ position: 'relative' }}>
      <Headline>About Me</Headline>
      <About />
    </Section>
  </Layout>
);

export default AboutPage;
