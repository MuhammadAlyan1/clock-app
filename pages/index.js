import Head from 'next/head';
import { useState } from 'react';
import RandomQuote from '../components/RandomQuote';
import MoreDetails from '../components/MoreDetails';
import Time from '../components/Time';
import spacetime from 'spacetime';

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const isEvening = spacetime.now().dayTime() === 'evening';

  return (
    <>
      <Head>
        <title>Clock</title>
      </Head>
      <section
        className={`h-screen overflow-hidden bg-cover bg-[center_center] lg:flex lg:items-center lg:justify-between ${
          isEvening ? 'bg-night' : 'bg-day'
        }`}
      >
        <div className="lg:mx-auto lg:max-w-[1100px]">
          <div
            className={`flex flex-col p-4 ${
              showMore ? 'h-[50vh]' : 'h-[55vh]'
            }`}
          >
            {!showMore && <RandomQuote />}
            <Time showMore={showMore} setShowMore={setShowMore} />
          </div>

          {showMore && <MoreDetails d />}
        </div>
      </section>
    </>
  );
}
