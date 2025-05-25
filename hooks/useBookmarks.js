import { useBookmarkStore } from '../stores/useBookmarkStore';

export default function useBookmarks() {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkStore();
  return { bookmarks, addBookmark, removeBookmark };
}