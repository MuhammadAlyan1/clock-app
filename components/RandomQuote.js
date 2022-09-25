import React, { useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    content:
      'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
    author: 'Ada Lovelace',
  });

  const fetchQuote = async () => {
    const URL = 'https://api.quotable.io/random';
    const response = await fetch(URL);
    const data = await response.json();
    setQuote(data);
  };

  const { content, author } = quote;

  return (
    <section className="relative max-w-[500px] pr-9">
      <p className=" text-white">“{content}”</p>
      <p className="mt-1 text-base font-bold text-white">{author}</p>
      <button
        onClick={fetchQuote}
        className="absolute right-2 top-2  text-2xl text-white"
      >
        <BsArrowRepeat />
      </button>
    </section>
  );
};

export default RandomQuote;
