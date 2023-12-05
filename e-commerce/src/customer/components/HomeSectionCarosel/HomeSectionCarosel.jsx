import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";



const HomeSectionCarosel = ({data, sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3},
    1024: { items: 4},
  };


  const items = data.map((item) => <HomeSectionCard  product={item}/>);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 mx-8 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
         mouseTracking
         items={items}
         responsive={responsive}
         controlsStrategy="alternate"
        disableDotsControls
        />
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
