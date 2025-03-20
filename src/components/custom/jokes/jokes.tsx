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
import { useQuery } from '@tanstack/react-query';
import { getRandomJoke, getSearchJokes } from '@/app/api/jokes';

const Jokes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isRandom, setIsRandom] = useState(false);

  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
    refetch: refetchSearch,
  } = useQuery({
    queryKey: ['searchJokes'],
    queryFn: async () => await getSearchJokes(searchQuery),
    enabled: false,
  });

  const {
    data: randomData,
    isLoading: randomLoading,
    isError: randomError,
    refetch: refetchRandom,
  } = useQuery({
    queryKey: ['randomJoke'],
    queryFn: async () => await getRandomJoke(),
    enabled: false,
  });

  const search = () => {
    setIsRandom(false);
    refetchSearch();
  };

  const getRandom = () => {
    setIsRandom(true);
    refetchRandom();
  };

  return (
    <Card className="md:min-w-[820px] max-w-[1024px] md:max-h-[90vh] lg:max-h-screen">
      <CardHeader>
        <CardTitle className="text-2xl md:text-4xl">Get your Dad Jokes 😆</CardTitle>
        <CardDescription>Search for a dad joke using a keyword or press random and get one random dad joke.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-8'>
          <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
            <SearchBar value={searchQuery} setValue={setSearchQuery} submit={search} isLoading={false} />
            <p><strong>OR</strong></p>
            <div className='flex justify-center items-center'>
              <Button onClick={getRandom}>Random 🎲</Button>
            </div>
          </div>
          <Separator />
          <div>
            {isRandom
              ? <RandomResult
                joke={randomData?.joke}
                loading={randomLoading}
                error={randomError}
              />
              : searchData?.results?.length
                ? <Results
                  query={searchQuery}
                  jokes={searchData?.results}
                  loading={searchLoading}
                  error={searchError}
                />
                : <></>
            }
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Jokes;
