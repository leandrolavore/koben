import React from 'react'
import { TJoke, SHORT, MEDIUM } from './results';
import { capitalizeFirstLetter, highlightMatchedWord } from '@/lib/string-helpers';
import { Separator } from '@radix-ui/react-separator';
import parse from 'html-react-parser';
import { Card } from '../ui/card';

type TJokesGroup = {
  group: 'short' | 'medium' | 'long';
  jokes: TJoke[]
};

const JokesGroup = ({
  group,
  jokes
}: TJokesGroup) => {
  let description = '';

  if (group === 'short') {
    description = `under ${SHORT} words`;
  } else if (group === 'medium') {
    description = `between ${SHORT} and ${MEDIUM} words`;
  } else if (group === 'long') {
    description = `over ${MEDIUM} words`;
  }

  return (
    <Card className='flex flex-col gap-2 p-8'>
      <p className='font-bold '>{`${capitalizeFirstLetter(group)} jokes, (${description}):`}</p>
      <div className="
        overflow-y-auto
        max-h-[20vh]
        sm:max-h-[10vh]
        md:max-h-[12vh]
        lg:max-h-[15vh]
      ">
        {jokes?.length ? jokes.map((j) => (
          <div key={j.id} className="flex flex-col my-2">
            <p className="text-gray-700 italic">
              {parse(highlightMatchedWord({ word: "dog", text: j.joke }))}
            </p>
            <Separator />
          </div>
        )) : <div><p>{`There are no ${group} jokes for this word.`}</p></div>}
      </div>
    </Card>
  )
}

export default JokesGroup;
