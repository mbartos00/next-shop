import { create } from 'zustand';

type StoreProps = {
	isMenuOpen: boolean;
	toggleMenuOpen: () => void;
};

const useStore = create<StoreProps>()((set) => ({
	isMenuOpen: false,
	toggleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useStore;
