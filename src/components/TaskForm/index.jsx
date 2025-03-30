import { useTaskContext } from '../../context/TaskContext';
import { useState } from 'react';

export const TaskForm = () => {
  const { newTask, setNewTask, priority, setPriority, handleAddTask } = useTaskContext();
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);

  return (
    <div className='bg-gray-900/50 rounded-3xl p-4 sm:p-6 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-purple-500/10 mb-6 sm:mb-8'>
      <form className='flex flex-col gap-3 sm:gap-4' onSubmit={handleAddTask}>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Enter your next mission...'
          className='w-full bg-gray-800/50 text-gray-100 placeholder-gray-500 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-700/50 text-sm sm:text-base'
        />

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
          {/* Mobile dropdown for priority */}
          <div className='relative sm:hidden flex-1'>
            <button
              type='button'
              onClick={() => setShowPriorityMenu(!showPriorityMenu)}
              className='w-full flex items-center justify-between bg-gray-800/50 text-gray-100 rounded-xl px-4 py-3 border border-gray-700/50 text-sm'
            >
              <span>
                {priority === 'high'
                  ? 'High Priority'
                  : priority === 'medium'
                    ? 'Medium Priority'
                    : 'Low Priority'}
              </span>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                ></path>
              </svg>
            </button>

            {showPriorityMenu && (
              <div className='absolute z-10 mt-1 w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700/50'>
                <button
                  type='button'
                  onClick={() => {
                    setPriority('high');
                    setShowPriorityMenu(false);
                  }}
                  className='block w-full text-left px-4 py-2 hover:bg-gray-700 text-sm'
                >
                  High Priority
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setPriority('medium');
                    setShowPriorityMenu(false);
                  }}
                  className='block w-full text-left px-4 py-2 hover:bg-gray-700 text-sm'
                >
                  Medium Priority
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setPriority('low');
                    setShowPriorityMenu(false);
                  }}
                  className='block w-full text-left px-4 py-2 hover:bg-gray-700 text-sm'
                >
                  Low Priority
                </button>
              </div>
            )}
          </div>

          {/* Desktop select for priority */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className='hidden sm:block bg-gray-800/50 text-gray-100 rounded-2xl px-4 py-2 border border-gray-700/50'
          >
            <option value='high'>High Priority</option>
            <option value='medium'>Medium Priority</option>
            <option value='low'>Low Priority</option>
          </select>

          <button
            type='submit'
            className='group relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/50 rounded-xl sm:rounded-2xl font-medium text-white overflow-hidden transition-all hover:scale-105 text-sm sm:text-base'
          >
            <span className='absolute inset-0 bg-gray-500/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl'></span>
            <span className='relative flex items-center justify-center gap-2'>
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 4v16m8-8H4'
                />
              </svg>
              Add Task
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
