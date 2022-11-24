import Head from 'next/head';
import { Banner, Footer, Header, MainSection } from './../components';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>AirBnb</title>
        <meta name="description" content="An AirBnb clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <MainSection exploreData={exploreData} cardsData={cardsData} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const resExplore = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await resExplore.json();

  const resCards = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const cardsData = await resCards.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
