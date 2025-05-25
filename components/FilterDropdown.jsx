'use client';
import { useState } from 'react';

export default function FilterDropdown({ onFilter }) {
  const [department, setDepartment] = useState('');
  const [rating, setRating] = useState('');

  const departments = ['HR', 'Engineering', 'Sales'];
  const ratings = [1, 2, 3, 4, 5];

  const handleApply = () => {
    onFilter({ department, rating });
  };

  return (
    <div className="flex gap-2">
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Filter by department"
      >
        <option value="">All Departments</option>
        {departments.map((dep) => (
          <option key={dep} value={dep}>
            {dep}
          </option>
        ))}
      </select>
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Filter by rating"
      >
        <option value="">All Ratings</option>
        {ratings.map((r) => (
          <option key={r} value={r}>
            {r} Stars
          </option>
        ))}
      </select>
      <button
        onClick={handleApply}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Apply
      </button>
    </div>
  );
}