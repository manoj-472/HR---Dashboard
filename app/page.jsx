
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import useSearch from '../hooks/useSearch';
import useBookmarks from '../hooks/useBookmarks';
import { fetchUsers } from '../lib/api';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const { searchTerm, filteredUsers, handleSearch } = useSearch(users);
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const [filters, setFilters] = useState({ department: '', rating: '' });

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUsers(page);
        setUsers(data);
      } catch (err) {
        setError('Failed to load employees. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, [page]);

  const handleFilter = ({ department, rating }) => {
    setFilters({ department, rating });
  };

  const filteredBySearchAndFilters = filteredUsers.filter((user) => {
    const matchesDepartment = filters.department ? user.department === filters.department : true;
    const matchesRating = filters.rating ? user.rating === Number(filters.rating) : true;
    return matchesDepartment && matchesRating;
  });

  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;
  if (loading) return <div className="text-center text-gray-600 dark:text-gray-300 p-4">Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown onFilter={handleFilter} />
        <Link
          href="/bookmarks"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          View Bookmarks
        </Link>
      </div>
      {filteredBySearchAndFilters.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-300">No employees found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBySearchAndFilters.map((user) => (
            <Card
              key={user.id}
              user={user}
              isBookmarked={bookmarks.includes(user.id)}
              onBookmark={() => addBookmark(user.id)}
              onRemoveBookmark={() => removeBookmark(user.id)}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 dark:disabled:bg-gray-600"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
