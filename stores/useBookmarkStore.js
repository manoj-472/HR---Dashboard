
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBookmarkStore = create(
  persist(
    (set) => ({
      bookmarks: [],
      addBookmark: (id) => set((state) => {
        console.log('Adding bookmark ID:', id); // Debug log
        return { bookmarks: [...state.bookmarks, id] };
      }),
      removeBookmark: (id) => set((state) => {
        console.log('Removing bookmark ID:', id); // Debug log
        return { bookmarks: state.bookmarks.filter((b) => b !== id) };
      }),
    }),
    {
      name: 'bookmarks-storage', // Key in localStorage
    }
  )
);