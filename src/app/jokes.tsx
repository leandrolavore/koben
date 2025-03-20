'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SearchBar from '@/components/custom/search-bar';
import { Button } from '@/components/ui/button';
import RandomResult from '@/components/custom/random-result';
import { Separator } from "@/components/ui/separator"
import Results from '@/components/custom/results';

const Jokes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [jokesList, setJokesList] = useState<string[]>([]);

  const search = () => { };

  const getRandomJoke = () => { };

  const results = [{
    "id": "82wHlbaapzd",
    "joke": "Me: If humans lose the ability to hear high frequency volumes as they get older, can my 4 week old son hear a dog whistle?\r\n\r\nDoctor: No, humans can never hear that high of a frequency no matter what age they are.\r\n\r\nMe: Trick question... dogs can't whistle."
  },
  {
    "id": "YvkV8xXnjyd",
    "joke": "Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy."
  },
  {
    "id": "EBQfiyXD5ob",
    "joke": "what do you call a dog that can do magic tricks? a labracadabrador"
  },
  {
    "id": "GtH6E6UD5Ed",
    "joke": "What kind of dog lives in a particle accelerator? A Fermilabrador Retriever."
  },
  {
    "id": "obhFBljb2g",
    "joke": "I adopted my dog from a blacksmith. As soon as we got home he made a bolt for the door."
  },
  {
    "id": "89MZLmWnWvc",
    "joke": "I can't take my dog to the pond anymore because the ducks keep attacking him. That's what I get for buying a pure bread dog."
  },
  {
    "id": "R7UfaahVfFd",
    "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."
  },
  {
    "id": "71wsPKeF6h",
    "joke": "What did the dog say to the two trees? Bark bark."
  },
  {
    "id": "lyk3EIBQfxc",
    "joke": "I went to the zoo the other day, there was only one dog in it. It was a shitzu."
  },
  {
    "id": "DIeaUDlbUDd",
    "joke": "“My Dog has no nose.” “How does he smell?” “Awful”"
  },
  {
    "id": "AQn3wPKeqrc",
    "joke": "It was raining cats and dogs the other day. I almost stepped in a poodle."
  },
  {
    "id": "sPRnOfiyAAd",
    "joke": "At the boxing match, the dad got into the popcorn line and the line for hot dogs, but he wanted to stay out of the punchline."
  },
  {
    "id": "Lmjqzsr49pb",
    "joke": "What did the Zen Buddist say to the hotdog vendor? Make me one with everything."
  }];

  const random = "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."

  return (
    <Card className="md:min-w-[820px] max-w-[1024px] md:max-h-[90vh]">
      <CardHeader>
        <CardTitle className="text-2xl md:text-4xl">Get your Dad Jokes 😆</CardTitle>
        <CardDescription>Search for a dad joke or press random and get one random dad joke.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-8'>
          <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
            <SearchBar value={searchQuery} setValue={setSearchQuery} submit={search} isLoading={isLoading} />
            <p><strong>OR</strong></p>
            <div className='flex justify-center items-center'>
              <Button onClick={getRandomJoke}>Random 🎲</Button>
            </div>
          </div>
          <Separator />
          <div>
            {isRandom ? <RandomResult joke={random} /> : true ? <Results jokes={results} /> : <></>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Jokes;
