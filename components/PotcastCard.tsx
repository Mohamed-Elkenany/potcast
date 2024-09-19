import Image from "next/image";
import React from "react";

const PotcastCard = ({ potcastinfo }) => {
  return (
    <div className="w-full flex flex-col items-start gap-y-1">
      <Image
        src={potcastinfo.image}
        width={174}
        height={174}
        alt="potcast_iamge"
        className="w-full"
        quality={100}
      />
      <div>
        <h5 className="text-base font-bold text-white-1">{potcastinfo.name}</h5>
        <span className="text-white-4 text-xs font-normal">
          {potcastinfo.des}
        </span>
      </div>
    </div>
  );
};

export default PotcastCard;
