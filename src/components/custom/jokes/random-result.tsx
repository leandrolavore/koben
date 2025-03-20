import React from 'react';
import Spinner from '../spinner';

const RandomResult = ({
  joke,
  loading,
  error
}: {
  joke: string;
  loading: boolean;
  error: boolean;
}) => {
  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-lg">
      {loading ?
        <Spinner />
        : error
          ? <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Error, try again</h2>
          : joke ?
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Your Random Joke:
              </h2>
              <p className="text-gray-700 text-lg italic">
                {joke}
              </p>
            </>
            : <></>}
    </div>
  );
};

export default RandomResult;