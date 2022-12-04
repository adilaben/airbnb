import React from 'react';
import { InfoCard } from '../components';

const SearchResults = ({
  results,
  range,
  location,
  noOfGuests,
  guestOrGuests,
}) => {
  return (
    <section className="flex-grow pt-6 px-6">
      <p className="text-sm">
        300+ Stays - {range} - for {noOfGuests} {guestOrGuests}
      </p>
      <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

      <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
        <p className="button">Cancellation Flexibility</p>
        <p className="button">Type Of Place</p>
        <p className="button">Price </p>
        <p className="button">Rooms and Beds</p>
        <p className="button">More Filters</p>
      </div>

      <div className="flex flex-col ">
        {results.map(
          ({ img, location, title, description, star, price, total }) => (
            <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          )
        )}
      </div>
    </section>
  );
};

export default SearchResults;
