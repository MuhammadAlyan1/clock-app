import React, { useEffect, useState } from 'react';
import spacetime from 'spacetime';

const MoreDetails = () => {
  const [timezone, setTimezone] = useState('');
  const [weekday, setWeekday] = useState('');
  const [dayOfYear, setDayOfYear] = useState(0);
  const [weekOfYear, setWeekOfYear] = useState(0);

  useEffect(() => {
    const time = spacetime.now();

    setTimezone(time.timezone().name);
    setWeekday(time.dayName());
    setWeekOfYear(time.week());
    setDayOfYear(time.dayOfYear());
  }, []);

  return (
    <section className="absolute bottom-0 left-0 right-0 p-4 text-white backdrop-blur-[100px]">
      <div className="md:flex  md:flex-wrap md:justify-between md:gap-8 md:px-20 lg:mx-auto lg:max-w-[900px] lg:px-0 xl:max-w-[1100px]">
        <div className="detailsContainer">
          <h2 className="detailHeading">Current timezone</h2>
          <p className="detailDescription">{timezone}</p>
        </div>
        <div className="detailsContainer ">
          <h2 className="detailHeading md:ml-auto">Day of the year</h2>
          <p className="detailDescription md:ml-auto">{dayOfYear}</p>
        </div>
        <div className="detailsContainer">
          <h2 className="detailHeading">Day of week</h2>
          <p className="detailDescription">{weekday}</p>
        </div>
        <div className="detailsContainer">
          <h2 className="detailHeading md:ml-auto">Week number</h2>
          <p className="detailDescription md:ml-auto">{weekOfYear}</p>
        </div>
      </div>
    </section>
  );
};

export default MoreDetails;
