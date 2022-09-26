import React, { useState, useEffect } from 'react';
import { FiSun } from 'react-icons/fi';
import { MdOutlineNightlight } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';
import spacetime from 'spacetime';
import useFetchLocation from '../hooks/useFetchLocation';

const Time = ({ showMore, setShowMore }) => {
  const [time, setTime] = useState('');
  const [dayTime, setDayTime] = useState('');

  const getCurrentTime = () => {
    const time = spacetime.now();
    return time.format('time-24');
  };

  useEffect(() => {
    const time = spacetime.now();
    setTime(getCurrentTime());
    setDayTime(time.dayTime());

    const timeInterval = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <section className="relative mt-auto lg:mt-0 lg:min-w-[900px] xl:min-w-[1100px]">
      <div className="mt-8 flex items-center gap-4 text-2xl text-white">
        {dayTime === 'evening' ? <MdOutlineNightlight /> : <FiSun />}
        <h1 className="uppercase text-white lg:hidden">Good {dayTime}</h1>
        <h1 className="hidden uppercase text-white lg:block">
          Good {dayTime}, it&apos;s currently
        </h1>
      </div>
      <h2 className="text-[6rem] font-bold uppercase tracking-wide text-white md:text-[10rem]">
        {time}
      </h2>
      <p className="pl-2 text-base font-bold uppercase text-white md:text-2xl">
        In {useFetchLocation()}
      </p>
      <button
        className="mt-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xl uppercase tracking-widest text-slate-500 md:absolute md:bottom-2 md:right-0"
        onClick={() => setShowMore(!showMore)}
      >
        More
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-2xl text-white transition-transform duration-150 ease-in ${
            showMore ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <RiArrowDownSLine />
        </div>
      </button>
    </section>
  );
};

export default Time;
