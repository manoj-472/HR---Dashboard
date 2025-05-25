'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{error.message || 'An unexpected error occurred.'}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          aria-label="Try again"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}