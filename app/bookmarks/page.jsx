// 'use client';
// import { useState, useEffect } from 'react';
// import Card from '../../components/Card';
// import useBookmarks from '../../hooks/useBookmarks';
// import { fetchUsersByIds } from '../../lib/api';

// export default function Bookmarks() {
//   const { bookmarks, removeBookmark } = useBookmarks();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadBookmarkedUsers() {
//       try {
//         setLoading(true);
//         setError(null);
//         if (bookmarks.length > 0) {
//           const data = await fetchUsersByIds(bookmarks);
//           setUsers(data);
//         } else {
//           setUsers([]);
//         }
//       } catch (err) {
//         setError('Failed to load bookmarked employees.');
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadBookmarkedUsers();
//   }, [bookmarks]);

//   if (error) return <div className="text-center text-red-500 p-4">{error}</div>;
//   if (loading) return <div className="text-center text-gray-600 dark:text-gray-300 p-4">Loading...</div>;
//   if (bookmarks.length === 0) return <div className="text-center text-gray-600 dark:text-gray-300 p-4">No bookmarked employees.</div>;

//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl font-bold">Bookmarks</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {users.map((user) => (
//           <Card
//             key={user.id}
//             user={user}
//             isBookmarked={true}
//             onRemoveBookmark={() => removeBookmark(user.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '../../components/Card';
import useBookmarks from '../../hooks/useBookmarks';
import { fetchUsersByIds } from '../../lib/api';

export default function Bookmarks() {
  const { bookmarks, removeBookmark } = useBookmarks();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('Bookmarks page - Bookmarked IDs:', bookmarks); // Debug log

  useEffect(() => {
    async function loadBookmarkedUsers() {
      try {
        setLoading(true);
        setError(null);
        if (bookmarks.length > 0) {
          const data = await fetchUsersByIds(bookmarks);
          console.log('Fetched bookmarked users:', data); // Debug log
          setUsers(data);
        } else {
          setUsers([]);
        }
      } catch (err) {
        setError('Failed to load bookmarked employees.');
      } finally {
        setLoading(false);
      }
    }
    loadBookmarkedUsers();
  }, [bookmarks]);

  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;
  if (loading) return <div className="text-center text-gray-600 dark:text-gray-300 p-4">Loading...</div>;
  if (bookmarks.length === 0) return (
    <div className="text-center text-gray-600 dark:text-gray-300 p-4">
      No bookmarked employees.
      <div className="mt-4">
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bookmarks</h1>
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Home
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            isBookmarked={true}
            onRemoveBookmark={() => removeBookmark(user.id)}
          />
        ))}
      </div>
    </div>
  );
}