import type { NextPage } from 'next';

import LandingPage from '@Components/LandingPage';
import ToursSlideshow from '@Components/ToursSlideshow';
import Layout from '@Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <LandingPage />
      <ToursSlideshow />
    </Layout>
  );
};

export default Home;
