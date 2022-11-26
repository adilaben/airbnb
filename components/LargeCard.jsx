import Image from 'next/legacy/image';
import React from 'react';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-8 sm:pt-16 cursor-pointer">
      <div className="relative h-96 w-[100%]">
        <Image
          src={img}
          alt="beach"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-[100%] sm:w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
