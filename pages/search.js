import { format } from 'date-fns';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Footer, Header, InfoCard } from '../components';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const guestOrGuests = noOfGuests === '1' ? 'guest' : 'guests';

  return (
    <div>
      <Head>
        <title>AirBnb | Search</title>
        <meta name="description" content="An AirBnb clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} ${guestOrGuests}`}
      />
      <main className="flex">
        <section className="flex-grow pt-6 px-6">
          <p className="text-sm">
            300+ Stays - {range} - for {noOfGuests} {guestOrGuests}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price </p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col ">
            {searchResults.map(
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
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const data = await fetch('https://www.jsonkeeper.com/b/5NPS');
  const searchResults = await data.json();

  return {
    props: {
      searchResults,
    },
  };
}
