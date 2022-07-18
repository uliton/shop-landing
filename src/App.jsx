import React from 'react';
import './App.scss';
import { Layout } from './components/Layout';
import { Header } from './components/sections/Header';
import { Services } from './components/sections/Services';
import { DevelopmentStages } from './components/sections/DevelopmentStages';
import { Portfolio } from './components/sections/Portfolio';
import { MoreInfo } from './components/sections/MoreInfo';
import { ContactUs } from './components/sections/ContactUs';

export const App = () => (
  <div className="starter">
    <Layout>
      <Header />
      <Services />
      <DevelopmentStages />
      <Portfolio />
      <MoreInfo />
      <ContactUs />
    </Layout>
  </div>
);
