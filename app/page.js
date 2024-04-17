
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./_components/Hero";
import BannerSale from "./_components/BannerSale";
import NewArrival from "./_components/NewArrival";

export default function Home() {
  return (
    <div>
      <Hero />
      <BannerSale />
      <NewArrival/>
    </div>
  );
}
