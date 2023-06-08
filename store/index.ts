import { create } from 'zustand';

const useAIStore = create((set) => ({
  dataSelect: 0,
  ml: '',
  increaseData: () => set((state) => ({ dataSelect: state.dataSelect + 1 })),
  decreaseData: () => set((state) => ({ dataSelect: state.dataSelect - 1 })),
  setBasic: () => set(() => ({ ml: 'basic' })),
  setAdvanced: () => set(() => ({ ml: 'advanced' })),
  tryAgain: () =>
    set(() => ({
      ml: '',
      dataSelect: 0,
    })),
}));

export default useAIStore;
