'use client';

import Layout from '@Layout/Layout';
import LandingPage from '@Components/LandingPage';
import ToursSlideshow from '@Components/ToursSlideshow';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <LandingPage />
      <ToursSlideshow />
    </Layout>
  );
}
