import Link from 'next/link';
import RatingStars from './RatingStars';

export default function Card({ user, isBookmarked, onBookmark, onRemoveBookmark }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{user.firstName} {user.lastName}</h3>
      <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
      <p className="text-gray-600 dark:text-gray-300">Age: {user.age}</p>
      <p className="text-gray-600 dark:text-gray-300">Department: {user.department}</p>
      <RatingStars rating={user.rating} />
      <div className="flex gap-2 mt-2">
        <Link href={`/employee/${user.id}`} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          View
        </Link>
        <button
          onClick={isBookmarked ? onRemoveBookmark : onBookmark}
          className={`px-3 py-1 ${isBookmarked ? 'bg-red-500' : 'bg-green-500'} text-white rounded hover:bg-opacity-90`}
        >
          {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        </button>
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Promote
        </button>
      </div>
    </div>
  );
}