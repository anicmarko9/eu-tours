import Image from "next/image";
import VignetteScreen from "src/components/VignetteScreen";

const ToursSlideshow = (): JSX.Element => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          fill
          src="/test.png"
          alt="Background Image"
          className="h-full w-full object-cover"
        />
      </div>
      <VignetteScreen />
      <div className="w=full relative flex h-screen space-x-16 px-8 pb-4 pt-28 text-white xl:px-16 2xl:px-32">
        <div className="flex h-full w-1/2 flex-col justify-center">
          <div className="flex h-4/5 space-x-4">
            <div className="w-2/5">
              <p className="titleText">Tour Name</p>
              <p className="descriptionText">
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
                  className="h-full w-full rounded-lg"
                />
              </div>
            </div>
            <div className="w-2/5">
              <p className="titleText">Tour Name</p>
              <p className="descriptionText">
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
                  className="h-full w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="descriptionText flex w-4/5 justify-end">
            <button>{"<-"}</button>
            <button>{"->"}</button>
          </div>
        </div>
        <div className="flex h-full w-1/2 flex-col justify-center">
          <div>
            <p className="titleText">Title</p>
            <p className="descriptionText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolor neque saepe officia, non itaque necessitatibus
              excepturi id, quidem unde suscipit ipsum deleniti amet, alias
              doloremque quam voluptatibus ipsa autem?
            </p>
            <button className="titleText">Explore -{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursSlideshow;
