import React from "react";
import { potcastInfo } from "../../constant";
import PotcastCard from "../../components/PotcastCard";
const Home = () => {
  return (
    <div className="test min-h-screen col-span-8 pt-8 px-12">
      <div>
        <h3 className="font-bold text-xl text-white-1 mb-6">Trending Podcasts</h3>
        <div className="grid grid-cols-4 gap-x-4">
          {potcastInfo.map((potcastInfo, i) => (
            <PotcastCard key={i} potcastinfo={potcastInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
