import type { NextPage } from "next";
import ToursSlideshow from "src/components/ToursSlideshow";

import Layout from "src/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-screen w-full"></div>
      <ToursSlideshow />
    </Layout>
  );
};

export default Home;
