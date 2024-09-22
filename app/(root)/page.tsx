"use client";
import React from "react";
import { potcastInfo } from "../../constant";
import PotcastCard from "../../components/PodcastCard";
import Link from "next/link";

const Home = () => {
  return (
    <div className="test min-h-screen col-span-8 pt-8 px-12">
      <div className="mb-[80px]">
        <h3 className="title-style">Trending Podcasts</h3>
        <div className="grid grid-cols-4 gap-x-4 mt-6">
          {potcastInfo.map(({ name, des, image }, i) => (
            <PotcastCard key={i} name={name} des={des} image={image} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="title-style">Latest Podcasts</h3>
          <Link href={"/"} className="font-semibold text-base text-orange-1">
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
