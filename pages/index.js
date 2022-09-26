import Head from 'next/head';
import { useState } from 'react';
import RandomQuote from '../components/RandomQuote';
import MoreDetails from '../components/MoreDetails';
import Time from '../components/Time';
import spacetime from 'spacetime';

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const isEvening = spacetime.now().dayTime() === 'evening' || 'good night';

  return (
    <>
      <Head>
        <title>Clock</title>
      </Head>
      <div
        className={`bg-cover bg-[center_center] ${
          isEvening ? 'bg-night' : 'bg-day'
        }`}
      >
        <section
          className={`h-screen overflow-hidden lg:flex lg:items-center lg:justify-between`}
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
      </div>
    </>
  );
}
