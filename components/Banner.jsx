import { Carousel } from 'flowbite-react';
import Image from 'next/legacy/image';

const Banner = () => {
  return (
    <div className="relative top-0 h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[660px] ">
      <Carousel indicators={false} className="[&>:nth-child(1)]:rounded-none">
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-none">
          <Image
            src="/assets/banner1.jpg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image
            src="/assets/banner2.jpg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image
            src="/assets/banner3.jpg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Carousel>
      <div className="absolute inset-0 w-full h-full bg-gray-700 bg-opacity-50 "></div>

      <div className="absolute top-[25%] sm:top-[30%] lg:top-[40%]   w-full text-center">
        <p className="mb-4 text-3xl sm:text-4xl drop-shadow-lg font-extrabold leading-none md:text-5xl lg:text-6xl text-white ">
          Live anywhere anytime.
        </p>
        <p className="sm:mb-8 mx-5  text-[1rem] sm:text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Book homes from local hosts in +190 countries and experience a place
          like you live there.
        </p>

        <button
          className="text-red-400 bg-white px-10 py-3  
        rounded-full shadow-md font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
