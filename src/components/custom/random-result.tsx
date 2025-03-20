import React from 'react';

const RandomResult = ({
  joke
}: {
  joke: string;
}) => {
  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Your Random Joke:
      </h2>
      <p className="text-gray-700 text-lg italic">
        {joke}
      </p>
    </div>
  );
};

export default RandomResult;