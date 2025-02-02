import { useTaskContext } from '../../context/TaskContext';

export const TaskForm = () => {
  const { newTask, setNewTask, priority, setPriority, handleAddTask } = useTaskContext();

  return (
    <div className='lg:col-span-3 bg-gray-900/50 rounded-3xl p-6 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-purple-500/10 mb-8'>
      <form className='flex flex-col sm:flex-row gap-4' onSubmit={handleAddTask}>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Enter your next mission...'
          className='flex-1 bg-gray-800/50 text-gray-100 placeholder-gray-500 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-700/50'
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className='bg-gray-800/50 text-gray-100 rounded-2xl px-4'
        >
          <option value='high'>High Priority</option>
          <option value='medium'>Medium Priority</option>
          <option value='low'>Low Priority</option>
        </select>

        <button
          type='submit'
          className='group relative px-8 py-4 bg-gray-900/50 rounded-2xl font-medium text-white overflow-hidden transition-all hover:scale-105'
        >
          <span className='absolute inset-0 bg-gray-500/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl'></span>
          <span className='relative flex items-center gap-2'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
      </form>
    </div>
  );
};

export default TaskForm;
