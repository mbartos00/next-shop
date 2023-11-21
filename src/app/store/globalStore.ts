import { create } from 'zustand';

type StoreProps = {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
};

const useGlobalStore = create<StoreProps>()((set) => ({
  isMenuOpen: false,
  toggleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useGlobalStore;
