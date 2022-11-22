import Image from 'next/legacy/image';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]  2xl:h-[700px] background-color: rgba(0, 0, 0, 0.75) ">
      <Image
        src="https://links.papareact.com/0fm"
        alt="Forest Banner"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg md:text-5xl font-semibold  ">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-red-400 bg-white px-10 py-4  
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
