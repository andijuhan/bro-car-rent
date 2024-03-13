import { create } from 'zustand';

interface IStoreSectionActive {
   activeSection: string;
   setSectionActive: (value: string) => void;
}

export const useStoreSectionActive = create<IStoreSectionActive>((set) => ({
   activeSection: '',
   setSectionActive: (value: string) => set({ activeSection: value }),
}));
