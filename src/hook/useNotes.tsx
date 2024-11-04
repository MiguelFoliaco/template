export interface NotesContext {
  noteSelected?: Note;
  notes: Note[];
  setNotes: (data: Note[]) => void;
  setNote: (data?: Note) => void;
}

export type Note = {
  title: string;
  tags: string[];
  body: string;
  createAt: string;
  updateAt: string;
  id: string;
};
export const useNotes = Zustand.create<NotesContext>((set) => ({
  notes: [],
  setNote: (data) => set({ noteSelected: data }),
  setNotes: (data) => set({ notes: data }),
}));
