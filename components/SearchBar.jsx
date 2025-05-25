'use client';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setValue(term);
    onSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Search by name, email, or department..."
      value={value}
      onChange={handleChange}
      className="w-full sm:w-1/2 p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Search employees"
    />
  );
}