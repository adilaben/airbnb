import { useEffect, useRef } from 'react';
import { SmallCard, MediumCard, LargeCard } from './';

const MainSection = ({ exploreData, cardsData }) => {
  const scrollRef = useRef();
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className=" pt-6">
        <h2 className="text-3xl sm:text-4xl  font-semibold pb-5 ">
          Explore Nearby
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </section>
      <section className=" pt-6">
        <h2 className="text-3xl sm:text-4xl  font-semibold py-5">
          Live Anywhere
        </h2>
        <div
          ref={scrollRef}
          className="flex space-x-3 overflow-scroll scrollbar-hide p-5"
        >
          {cardsData?.map((item) => (
            <MediumCard key={item.img} title={item.title} img={item.img} />
          ))}
        </div>
      </section>
      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired"
      />
    </main>
  );
};

export default MainSection;
