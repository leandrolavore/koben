import React, { useEffect, useState } from 'react';
import JokesGroup from './jokes-group';

export type TJoke = {
  id: string;
  joke: string;
}

export const SHORT = 10;
export const MEDIUM = 20;

const Results = ({
  jokes
}: {
  jokes: TJoke[]
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
      <JokesGroup group="short" jokes={shortJokes} />
      <JokesGroup group="medium" jokes={midJokes} />
      <JokesGroup group="long" jokes={longJokes} />
    </div>
  )
}

export default Results
