export const FilterButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${
        active ? 'bg-purple-500' : 'bg-gray-700'
      } transition-colors duration-200`}
    >
      {children}
    </button>
  );
};
