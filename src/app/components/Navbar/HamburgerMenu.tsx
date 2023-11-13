'use client';
import useStore from '@/app/store/store';

const HamburgerMenu = () => {
  const { isMenuOpen, toggleMenuOpen } = useStore();
  const handleClick = () => {
    toggleMenuOpen();
  };

  return (
    <button onClick={handleClick} className='z-10 flex flex-col items-center justify-center'>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
          isMenuOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
        }`}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm 
                    bg-black transition-all duration-300 ease-out ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-black
                    transition-all duration-300 ease-out ${
                      isMenuOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
                    }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
