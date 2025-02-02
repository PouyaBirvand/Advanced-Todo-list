import { useTaskContext } from '../../context/TaskContext';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useTaskContext();

  return (
    <div className='relative mb-6'>
      <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
        <svg
          className='w-5 h-5 text-gray-500'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>

      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search tasks...'
        className='w-full bg-gray-800/50 text-gray-100 placeholder-gray-500 rounded-xl pl-10 pr-4 py-3
                 focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                 border border-gray-700/50 transition-all duration-300
                 hover:border-purple-500/30'
      />

      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-300'
        >
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
