import React, { useEffect, useState } from 'react';
import JokesGroup from './jokes-group';
import Spinner from '../spinner';

export type TJoke = {
  id: string;
  joke: string;
}

export const SHORT = 10;
export const MEDIUM = 20;

const Results = ({
  jokes,
  query,
  loading,
  error
}: {
  jokes: TJoke[];
  query: string;
  loading: boolean;
  error: boolean;
}) => {
  const [shortJokes, setShortJokes] = useState<TJoke[]>([]);
  const [midJokes, setMidJokes] = useState<TJoke[]>([]);
  const [longJokes, setLongJokes] = useState<TJoke[]>([]);

  const groupJokes = (jokes: TJoke[]) => {
    const shortJokesArray: TJoke[] = [];
    const midJokesArray: TJoke[] = [];
    const longJokesArray: TJoke[] = [];

    for (const joke of jokes) {
      const wordCount = joke.joke.trim().split(/\s+/).length;

      if (wordCount < SHORT) {
        shortJokesArray.push(joke);
      } else if (wordCount < MEDIUM) {
        midJokesArray.push(joke);
      } else {
        longJokesArray.push(joke);
      }
    }


    setShortJokes(shortJokesArray);
    setMidJokes(midJokesArray);
    setLongJokes(longJokesArray);
  };

  useEffect(() => {
    if (!jokes?.length) return;

    groupJokes(jokes);
  }, [jokes]);

  return (
    <div className="flex flex-col gap-4">
      {loading ?
        <Spinner />
        : error
          ? <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Error, try again</h2>
          : jokes?.length
            ? <>
              <JokesGroup word={query} group="short" jokes={shortJokes} />
              <JokesGroup word={query} group="medium" jokes={midJokes} />
              <JokesGroup word={query} group="long" jokes={longJokes} />
            </>
            : <></>}
    </div>
  )
}

export default Results
