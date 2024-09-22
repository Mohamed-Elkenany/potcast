import Image from "next/image";
import React from "react";

const PodcastCard = ({
  name,
  image,
  des,
}: {
  name: string;
  image: string;
  des: string;
}) => {
  return (
    <figure className="w-full flex flex-col items-start gap-y-1">
      <Image
        src={image}
        width={174}
        height={174}
        alt="potcast_iamge"
        className="w-full"
        quality={100}
      />
      <figcaption>
        <h5 className="text-base font-bold text-white-1">{name}</h5>
        <span className="text-white-4 text-xs font-normal">{des}</span>
      </figcaption>
    </figure>
  );
};

export default PodcastCard;
