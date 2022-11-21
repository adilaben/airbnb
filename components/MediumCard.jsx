import Image from 'next/image';

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-72 w-80 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div>
        <h2 className="text-2xl mt-3">{title}</h2>
      </div>
    </div>
  );
};

export default MediumCard;
