import "react-alice-carousel/lib/alice-carousel.css";
import Marquee from "react-fast-marquee";

const ToursSlideshow = (): JSX.Element => {
  const images = [
    {
      url: "https://images.pexels.com/photos/3996438/pexels-photo-3996438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/3580532/pexels-photo-3580532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/11542516/pexels-photo-11542516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/800532/pexels-photo-800532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/714256/pexels-photo-714256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/358223/pexels-photo-358223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="flex flex-row gap-28  mt-44 flex-wrap">
      <div className="followOnInstaMarqueeConatiner">
        <Marquee pauseOnHover={false} speed={100} loop={0}>
          {images.map((image, index) => (
            <img
              key={index + 1}
              src={image.url}
              className="mrMl carouselIMg"
              alt="Eu Tour EUROPE images"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ToursSlideshow;
