import Head from 'next/head';
import { Banner, Header, SmallCard } from './../components';

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>AirBnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className=" pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
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
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await res.json();

  return {
    props: {
      exploreData,
    },
  };
}
