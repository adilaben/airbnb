import { format } from 'date-fns';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Footer, Header, SearchResults } from '../components';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const guestOrGuests = noOfGuests === '1' ? 'guest' : 'guests';

  return (
    <>
      <Head>
        <title>Airbnb | Searching For Vacation Homes</title>
        <meta
          name="description"
          content="Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} ${guestOrGuests}`}
      />
      <main className="flex">
        <SearchResults
          results={searchResults}
          range={range}
          location={location}
          noOfGuests={noOfGuests}
          guestOrGuests={guestOrGuests}
        />
      </main>
      <Footer />
    </>
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
