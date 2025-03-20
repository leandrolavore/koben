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
import RandomResult from '@/components/custom/jokes/random-result';
import { Separator } from "@/components/ui/separator"
import Results from '@/components/custom/jokes/results';

const Jokes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [jokesList, setJokesList] = useState<string[]>([]);

  const search = () => { };

  const getRandomJoke = () => { };

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
            {isRandom ? <RandomResult joke={""} /> : true ? <Results jokes={[]} /> : <></>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Jokes;
