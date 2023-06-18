import type { NextPage } from "next";
import Image from "next/image";
import VignetteScreen from "src/components/VignetteScreen";
import Layout from "src/components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full h-screen relative">
        <div className="absolute inset-0">
          <Image
            fill
            src="/test.png"
            alt="Background image"
            className="w-full h-full object-cover"
          />
        </div>
        <VignetteScreen />
        <div className="relative w=full h-screen flex space-x-16 pt-28 pb-4 2xl:px-32 xl:px-16 px-8 text-white">
          <div className="w-1/2 h-full flex flex-col justify-center">
            <div>
              <p>Title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolor neque saepe officia, non itaque necessitatibus
                excepturi id, quidem unde suscipit ipsum deleniti amet, alias
                doloremque quam voluptatibus ipsa autem?
              </p>
              <button>Explore -{">"}</button>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center">
            <div className="flex space-x-4 h-4/5">
              <div className="w-2/5">
                <p>Tour Name</p>
                <p>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                </p>
                <div className="h-3/4">
                  <Image
                    width={2000}
                    height={2000}
                    src="/test-2.png"
                    alt="Background image"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <div className="w-2/5">
                <p>Tour Name</p>
                <p>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                </p>
                <div className="h-3/4">
                  <Image
                    width={2000}
                    height={2000}
                    src="/test-2.png"
                    alt="Background image"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <button>{"<-"}</button>
              <button>{"->"}</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
