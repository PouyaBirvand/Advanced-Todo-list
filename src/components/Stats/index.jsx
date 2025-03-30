import { useTaskContext } from '../../context/TaskContext';

export const Stats = () => {
  const { tasks } = useTaskContext();
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const highPriorityTasks = tasks.filter((task) => task.priority === 'high').length;
  const activeTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className='mt-8 bg-gray-900/50 rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-gray-700/50'>
      <h3 className='text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4'>
        Statistics
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4'>
        <div className='bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700/50'>
          <div className='text-gray-400 text-xs sm:text-sm mb-1'>Total Tasks</div>
          <div className='text-xl sm:text-2xl font-bold text-gray-100'>{totalTasks}</div>
        </div>
        <div className='bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700/50'>
          <div className='text-gray-400 text-xs sm:text-sm mb-1'>Completed</div>
          <div className='text-xl sm:text-2xl font-bold text-green-500'>{completedTasks}</div>
          <div className='text-xs sm:text-sm text-gray-500'>{completionRate}% completion rate</div>
        </div>
        <div className='bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700/50'>
          <div className='text-gray-400 text-xs sm:text-sm mb-1'>Active Tasks</div>
          <div className='text-xl sm:text-2xl font-bold text-cyan-500'>{activeTasks}</div>
        </div>
        <div className='bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700/50'>
          <div className='text-gray-400 text-xs sm:text-sm mb-1'>High Priority</div>
          <div className='text-xl sm:text-2xl font-bold text-red-500'>{highPriorityTasks}</div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className='mt-4 p-3 sm:p-4 bg-gray-800/30 rounded-xl border border-gray-700/30'>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-gray-400 text-xs sm:text-sm'>Progress</span>
          <span className='text-gray-400 text-xs sm:text-sm'>{completionRate}%</span>
        </div>
        <div className='w-full bg-gray-700 rounded-full h-2 sm:h-2.5'>
          <div
            className='bg-gradient-to-r from-purple-500 to-cyan-500 h-2 sm:h-2.5 rounded-full transition-all duration-500'
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
