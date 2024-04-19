
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./_components/Hero";
import BannerSale from "./_components/BannerSale";
import NewArrival from "./_components/NewArrival";
import BigSaveZone from "./_components/BigSaveZone";
import CategoriesForMen from "./_components/CategoriesForMen";
import CategoriesForWomen from "./_components/CategoriesForWomen";
import TopBrandsDeal from "./_components/TopBrandsDeal";
import InTheLimelight from "./_components/InTheLimelight";
import FeedBack from "./_components/FeedBack";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="mt-[100px]">
      <Hero />
      <BannerSale />
      <NewArrival />
      <BigSaveZone />
      <CategoriesForMen/>
      <CategoriesForWomen/>
      <TopBrandsDeal/>
      <InTheLimelight/>
      <FeedBack />
      <Footer/>
    </div>
  );
}
