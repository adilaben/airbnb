import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

import Image from 'next/legacy/image';
import React from 'react';

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="sm:flex py-7 pr-4 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transiton duration-200 ease-out first:border-t">
      <div className=" relative w-auto h-52 sm:w-80 flex-shrink-0 mb-5  sm:mb-0">
        <Image
          src={img}
          alt="Houses"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow sm:pl-5">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold ">{location}</h2>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h3 className="text-xl font-semibold my-4">{title}</h3>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm flex-grow  text-gray-500">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center ">
            <StarIcon className="h-6 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
