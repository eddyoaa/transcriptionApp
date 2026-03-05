import { create } from 'zustand';
import { Note } from '@/features/notes/types';

type NotesStore = {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
};

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
}));
