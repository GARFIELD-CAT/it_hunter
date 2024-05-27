import SearchIcon from '@/assets/svg/search.svg';
import clsx from 'clsx';

export const Search = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      'flex w-full gap-6 py-0 px-6 rounded-full bg-white',
      className
    )}
  >
    <button className="focus:outline-none border-none bg-transparent cursor-pointer">
      <img className="w-6 aspect-square" src={SearchIcon} alt="" />
    </button>
    <input
      placeholder="Например, дизайнер"
      type="text"
      className="py-[1.19rem] focus:outline-none placeholder:text-[#939393]"
    />
  </div>
);
