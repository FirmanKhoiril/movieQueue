import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80dvh] text-white text-center p-6">
      <div className="text-8xl font-bold mb-6 animate-bounce text-primary-500">
        😕
      </div>
      <h1 className="text-4xl font-bold mb-2">Movie Not Found</h1>
      <p className="text-lg text-gray-400 mb-6">
        We couldn’t find any results for your search. Try a different title or check for spelling errors.
      </p>
    </div>
  );
};

export default NotFound;
