import type { NextPage } from "next";
import LandingPage from "src/components/LandingPage";
import ToursSlideshow from "src/components/ToursSlideshow";

import Layout from "src/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <LandingPage />
      <ToursSlideshow />
    </Layout>
  );
};

export default Home;
