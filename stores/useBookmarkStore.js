import { create } from 'zustand';

export const useBookmarkStore = create((set) => ({
  bookmarks: [],
  addBookmark: (id) => set((state) => ({ bookmarks: [...state.bookmarks, id] })),
  removeBookmark: (id) => set((state) => ({ bookmarks: state.bookmarks.filter((b) => b !== id) })),
}));