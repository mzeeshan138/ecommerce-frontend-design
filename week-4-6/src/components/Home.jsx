import React from 'react';
import NewsletterAlibaba from './layout/NewsletterAlibaba';
import Services from './sections/Services';
import RecomendedProducts from './sections/RecomendedProducts';
import Inquiry from './sections/Inquiry';
import CardCategoryA from './sections/CardCategoryA';
import CardCategoryB from './sections/CardCategoryB';
import Deal from './sections/Deal';
import Banner from './sections/Banner';

const Home = () => {
  return (
    <>
      <div className="container-fluid px-5 pageBackground">
        <Banner />
        <Deal />
        <CardCategoryA />
        <CardCategoryB />
        <Inquiry />
        <RecomendedProducts />
        <Services />
      </div>

      <NewsletterAlibaba />
    </>
  );
};

export default Home;
