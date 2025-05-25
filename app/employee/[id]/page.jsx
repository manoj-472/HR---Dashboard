'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Tabs from '../../../components/Tabs';
import RatingStars from '../../../components/RatingStars';
import { fetchUserById } from '../../../lib/api';

export default function EmployeeDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUserById(id);
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user details.');
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [id]);

  if (error) throw new Error(error); // Let error.js handle this
  if (loading) return <div className="text-center text-gray-600 dark:text-gray-300 p-4">Loading...</div>;

  const tabs = [
    {
      name: 'Overview',
      content: (
        <div className="space-y-2">
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <RatingStars rating={user.rating} />
        </div>
      ),
    },
    {
      name: 'Projects',
      content: (
        <div>
          <ul className="list-disc pl-5">
            <li>Project A (2024) - Completed</li>
            <li>Project B (2025) - In Progress</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Feedback',
      content: (
        <form className="space-y-4">
          <textarea
            className="w-full p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            placeholder="Add feedback..."
            aria-label="Feedback input"
          />
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
